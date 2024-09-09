import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createAddress, getAddress, updateAddress } from '../services/AddressService'

const AddressComponent = () => {

    const [streetNumber, setStreetNumber] = useState('');
    const [streetName, setStreetName] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');

    const {id} = useParams();

    const [errors, setErrors] = useState({
        streetNumber : '',
        streetName : '',
        city : '',
        state : '',
        zipcode : ''
    })

    const navigator = useNavigate();


    function saveOrUpdateAddress(e) {
        e.preventDefault()

        if(validateForm()) {
            const address = {streetNumber, streetName, city, state, zipcode}
            console.log(address)

            if (id) {
                updateAddress(id, address).then((response) => {
                    console.log(response.data);
                    navigator('/addresses')
                }).catch(error => console.error(error));
            }
            else{
                createAddress(address).then((response) => {
                    console.log(response.data)
                    navigator('/addresses')
                }).catch(error => console.error(error));
            }    
        }
    }

    function validateForm() {
        let valid = true;

        const errorsCopy = {... errors};

        if (streetNumber.trim()) errorsCopy.streetNumber = '';
        else {
            errorsCopy.streetNumber = 'Street number is required';
            valid = false;   
        }

        if (streetName.trim()) errorsCopy.streetName = '';
        else {
            valid = false;
            errorsCopy.streetName = 'Street name is required';
        }

        if (city.trim()) errorsCopy.city = '';
        else {
            errorsCopy.city = 'City is required';
            valid = false;
        }

        if (state.trim()) errorsCopy.state = '';
        else {
            errorsCopy.state = 'State is required';
            valid = false;
        }

        if (zipcode.trim()) errorsCopy.zipcode = '';
        else {           
            errorsCopy.zipcode = 'Zipcode is required';
            valid = false;
        }

        setErrors(errorsCopy);
        return valid;
    }

    function pageTitle() {
        if (id) {
            return <h2 className='text-center'>Update Address</h2>
        }
        else{
            <h2 className='text-center'>Add Address</h2>
        }
    }

    useEffect(() => {
        if (id) {
            getAddress(id).then((response) => {
                setStreetNumber(response.data.streetNumber);
                setStreetName(response.data.streetName);
                setCity(response.data.city);
                setState(response.data.state);
                setZipcode(response.data.zipcode);
            }).catch(error => {
                console.error(error);
            })
        }
    }, [id])


  return (
    <div className='container'>
        <br/> <br/>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {
                    pageTitle()
                }
                <div className='card-body'>
                    <form>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Street Number:</label>
                            <input
                                type='number'
                                placeholder='Enter street number'
                                name='streetNumber'
                                value={streetNumber}
                                className={`form-control ${ errors.streetNumber ? 'is-invalid': ''}`}
                                onChange={(e) => setStreetNumber(e.target.value)}
                            >
                            </input>
                            {errors.streetNumber && <div className='invalid-feedback'> { errors.streetNumber}</div> }
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Street Name:</label>
                            <input
                                type='text'
                                placeholder='Enter street name'
                                name='streetName'
                                value={streetName}
                                className={`form-control ${ errors.streetName ? 'is-invalid': ''}`}
                                onChange={(e) => setStreetName(e.target.value)}
                            >
                            </input>
                            {errors.streetName && <div className='invalid-feedback'> { errors.streetName}</div> }
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>City:</label>
                            <input
                                type='text'
                                placeholder='Enter city'
                                name='city'
                                value={city}
                                className={`form-control ${ errors.city ? 'is-invalid': ''}`}
                                onChange={(e) => setCity(e.target.value)}
                            >
                            </input>
                            {errors.city && <div className='invalid-feedback'> { errors.city}</div> }
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>State:</label>
                            <input
                                type='text'
                                placeholder='Enter State'
                                name='state'
                                value={state}
                                className={`form-control ${ errors.state ? 'is-invalid': ''}`}
                                onChange={(e) => setState(e.target.value)}
                            >
                            </input>
                            {errors.state && <div className='invalid-feedback'> { errors.state}</div> }
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Zipcode:</label>
                            <input
                                type='number'
                                placeholder='Enter zipcode'
                                name='zipcode'
                                value={zipcode}
                                className={`form-control ${ errors.zipcode ? 'is-invalid': ''}`}
                                onChange={(e) => setZipcode(e.target.value)}
                            >
                            </input>
                            {errors.zipcode && <div className='invalid-feedback'> { errors.zipcode}</div> }
                        </div>

                        <button type="submit" className="btn btn-primary" onClick={saveOrUpdateAddress}>Submit</button>

                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddressComponent
