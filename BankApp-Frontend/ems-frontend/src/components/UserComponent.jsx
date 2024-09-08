import React, {useState, useEffect, Component } from 'react'
import { createUser, getUserById, updateUser } from '../services/UserService';
import { useNavigate, useParams } from 'react-router-dom';
import './UserComponent.css'
import { createAddress } from '../services/AddressService';

const UserComponent = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userType, setUserType] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [addressId, setAddressId] = useState(''); 
  const [address, setAddress] = useState('');

  const [streetNumber, setStreetNumber] = useState('');
  const [streetName, setStreetName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');

  

  const navigator = useNavigate();

  const {id} = useParams();

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    userType: '',
    email: '',
    password: '',
    username: ''
  })

  useEffect(() => {

    if(id) {
      getUserById(id).then((response) => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setUserType(response.data.userType);
        setEmail(response.data.email);
        setPassword(response.data.password);
        setUsername(response.data.username);
      }).catch(error => console.error(error))
    }
    
  }, [id])


  

 
  function saveOrUpdateUser(e) {
    e.preventDefault();
    const address = {streetNumber, streetName, city, state, zipcode}
    const user = {firstName, lastName, userType, email, password, username, addressId}

    console.log(user);

    console.log(address);


    if(id) {
      updateUser(id, user).then((response) => {
        console.log(response.data)
        navigator('/users');
      }).catch(error => console.error(error))
    }
    else {
      createAddress(address).then((response) => {
        setAddressId(response.data.id);
        console.log(address);       
      }).catch(error => console.error(error))
    }
  }


  useEffect(() => {
    if (addressId) {
      const user = {firstName, lastName, userType, email, password, username, addressId}
      console.log("Show the Id address (addressId) is : " + addressId);
      createUser(user).then((response) => {
        console.log(response.data);
        navigator('/users')
      }).catch(error => console.error(error))
    }
  }, [addressId])



  function pageTitle() {
    if (id) {
      return <h2 className='text-center'>Update User</h2>
    }
    else {
      return <h2 className='text-center'>Add User</h2>
    }
  }


  return (
    <div className='container mb-5'>
      
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3 mb-5">
          {
            pageTitle()
          }
          <div className='card-body'>

            <form>
              <div className="row">
                <div className='form-group mb-3 col-md-6'>
                  <label className='form-label' htmlFor="inputFirstName4">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputFirstName4"
                    placeholder="Enter first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  >
                  </input>
                </div>
                <div className="form-group mb-3 col-md-6">
                  <label className='form-label' htmlFor="inputLastName4">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputLastName4"
                    placeholder="Enter last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  >
                  </input>
                </div>
              </div>
              <fieldset className="form-group">
                <div className="row">
                  <legend className="col-form-label col-sm-2 pt-0">User Type</legend>
                  <div className="col-sm-10">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="userType"
                        id="userType1"
                        value="ADMIN"
                        onChange={(e) => setUserType(e.target.value)}
                      >
                      </input>
                      <label className="form-check-label" htmlFor="userType1">Admin</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="userType"
                        id="userType2"
                        value="CUSTOMER"
                        onChange={(e) => setUserType(e.target.value)}
                      >
                      </input>
                      <label className="form-check-label" htmlFor="userType2">Customer</label>
                    </div>
                  </div>
                </div>
              </fieldset>

              <div className='form-group mb-3 col-md-12'>
                <label className='form-label' htmlFor="inputUsername4">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputUsername4"
                  placeholder="Enter Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                >
                </input>
              </div>
              <div className="form-group mt-3 mb-3 col-md-12">
                <label className='form-label' htmlFor="inputEmail4">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                >
                </input>
              </div>
              <div className="form-group mb-3 col-md-12">
                <label className='form-label' htmlFor="inputPassword4">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}></input>
              </div>

              <details>
                <summary>Enter Address</summary>
                <div className='row'>
                  <div className="form-group">
                  <label className='form-label' htmlFor="inputStreetNumber">Street Number:</label>
                    <input type='number' className="form-control" id="inputStreetNumber" placeholder="1234"
                      value={streetNumber}
                      // className={`form-control ${ errors.streetNumber ? 'is-invalid': ''}`}
                      onChange={(e) => setStreetNumber(e.target.value)}></input>
                  </div>
                  <div className="form-group">
                  <label className='form-label' htmlFor="inputAddressName">Street Number:</label>
                    <input type="text" className="form-control" id="inputAddressName" placeholder="Main St"
                      value={streetName}
                      // className={`form-control ${ errors.streetNumber ? 'is-invalid': ''}`}
                      onChange={(e) => setStreetName(e.target.value)}></input>
                  </div>
                  <div className="form-group">
                    <label className='form-label' htmlFor="inputAddress2">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" disabled></input>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label className='form-label' htmlFor="inputCity">City</label>
                      <input type="text" className="form-control" id="inputCity"
                        value={city}
                        // className={`form-control ${ errors.streetName ? 'is-invalid': ''}`}
                        onChange={(e) => setCity(e.target.value)}></input>
                    </div>
                    <div className="form-group col-md-3">
                      <label className='form-label' htmlFor="inputState">State</label>
                      <select id="inputState" className="form-control"
                        onChange={(e) => setState(e.target.value)}>
                        <option value="Select State">Choose State</option>
                        <option value="Maryland">MD</option>
                        <option value="Virginia">VA</option>
                        <option value="New Jersey">NJ</option>
                      </select>
                    </div>
                    <div className="form-group col-md-2">
                      <label className='form-label' htmlFor="inputZip">Zipcode</label>
                      <input type='number' className="form-control" id="inputZip"
                        value={zipcode}
                        // className={`form-control ${ errors.zipcode ? 'is-invalid': ''}`}
                        onChange={(e) => setZipcode(e.target.value)}></input>
                    </div>
                  </div>

                </div> <br/>
                
              </details>

              <button type="submit" className="btn btn-success mb-2" onClick={(e) => saveOrUpdateUser(e)}>Submit</button>
            </form>

          </div>
        </div>

      </div>
    </div>
  )
}

export default UserComponent
