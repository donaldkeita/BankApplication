import React, {useState, useEffect} from 'react'
import { deleteAddress, listAddresses } from '../services/AddressService'
import { useNavigate } from 'react-router-dom';


const ListAddressComponent = () => {

    const [addresses, setAddresses] = useState([]);

    const navigator = useNavigate();


    useEffect(() => {
        getAllAddresses()
    }, [])

    function getAllAddresses() {
        listAddresses().then((response) => {
            setAddresses(response.data);
        }).catch(error => {
            console.error(error);
        })
    }


    function addNewAddress() {
        navigator('/add-address')
    }

    function updateAddress(id) {
        navigator(`/edit-address/${id}`)
    }

    function removeAddress(id) {
        console.log(id);

        deleteAddress(id).then((response) => {
            getAllAddresses()
        }).catch(error => console.error(error));
    }


  return (
    <div className='container'>
      <h2 className='text-center'>List of addresses</h2>
      <button className="btn btn-primary mb-2" onClick={addNewAddress}>Add Address</button>
      <table className="table table-striped table-bordered">
        <thead>
            <tr>
                <th>Address Id</th>
                <th>Street Number</th>
                <th>Street Name</th>
                <th>City</th>
                <th>State</th>
                <th>Zipcode</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                addresses.map(address => 
                    <tr key={address.id}>
                        <td>{address.id}</td>
                        <td>{address.streetNumber}</td>
                        <td>{address.streetName}</td>
                        <td>{address.city}</td>
                        <td>{address.state}</td>
                        <td>{address.zipcode}</td>
                        <td>
                            <button className='btn btn-info' onClick={() => updateAddress(address.id)}>Update</button>
                            <button className='btn btn-danger' onClick={() => removeAddress(address.id)}
                                style={{marginLeft: '10px'}}>Delete</button>
                        </td>                    
                    </tr>
                )
            }
        </tbody>
      </table>
    </div>
  )
}

export default ListAddressComponent

