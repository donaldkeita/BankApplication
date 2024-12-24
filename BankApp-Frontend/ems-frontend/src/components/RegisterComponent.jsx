import React, { useState } from 'react'

const RegisterComponent = () => {


  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userType, setUserType] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [addressId, setAddressId] = useState('');

  const [addrId, setAddrId] = useState('');
  const [streetNumber, setStreetNumber] = useState('');
  const [streetName, setStreetName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');



  const [errors, setErrors] = useState({
      firstName: '',
      lastName: '',
      userType: '',
      email: '',
      password: '',
      username: '',
      
      streetNumber: '',
      streetName: '',
      city: '',
      state: '',
      zipcode: ''
  })




  function validateForm() {
    let valid = true;

    const errorsCopy = { ...errors };

    if (firstName.trim()) errorsCopy.firstName = '';
    else {
      errorsCopy.firstName = 'First name is required';
      valid = false;
    }
    if (lastName.trim()) errorsCopy.lastName = '';
    else {
      errorsCopy.lastName = 'Last name is required';
      valid = false;
    }
    if (userType.trim()) errorsCopy.userType = '';
    else {
      valid = false;
      errorsCopy.userType = 'User type is required';
    }
    if (email.trim()) errorsCopy.email = '';
    else {
      errorsCopy.email = 'email is required';
      valid = false;
    }
    if (password.trim()) errorsCopy.password = '';
    else {
      valid = false;
      errorsCopy.password = 'Password is required';
    }
    if (username.trim()) errorsCopy.username = '';
    else {
      valid = false;
      errorsCopy.username = 'Username is required';
    }
    if (streetNumber.toString().trim()) errorsCopy.streetNumber = '';
    else {
      valid = false;
      errorsCopy.streetNumber = 'Street number is required';
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
    if (zipcode.toString().trim()) errorsCopy.zipcode = '';
    else {
      errorsCopy.zipcode = 'Zipcode is required';
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  }



  function handleRegistrationForm(e) {
    e.preventDefault();
    const userProfile = {firstName, lastName, userType, email, password, username}
    const userAddress = {streetNumber, streetName, city, state, zipcode}

    console.log(userProfile)
    console.log(userAddress)
  }



  function pageTitle() {
    if (id) {
      return <h2 className='text-center'>Update User</h2>
    }
    else {
      return <h2 className='text-center'>Add User</h2>
    }
  }

  function shouldBeChecked() {
    if (id && userType) {
      return 'checked'
    }
  }


  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className='container'>
      <br /><br />
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <div className='card'>
            <div className='card-header'>
              <h2 className='text-center'>User Registration Form</h2>
              <div className='card-body'>

                <form>
                  <div className="row">
                    <div className='form-group mb-3 col-md-6'>
                      <label className='form-label' htmlFor="inputFirstName4">First Name</label>
                      <input
                        type="text"
                        className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                        id="inputFirstName4"
                        placeholder="Enter first name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      >
                      </input>
                      {errors.firstName && <div className='invalid-feedback'> {errors.firstName}</div>}
                    </div>
                    <div className="form-group mb-3 col-md-6">
                      <label className='form-label' htmlFor="inputLastName4">Last Name</label>
                      <input
                        type="text"
                        className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                        id="inputLastName4"
                        placeholder="Enter last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      >
                      </input>
                      {errors.lastName && <div className='invalid-feedback'> {errors.lastName}</div>}
                    </div>
                  </div>
                  <fieldset className="form-group">
                    <div className="row">
                      <legend className="col-form-label col-sm-2 pt-0">User Type</legend>
                      <div className="col-sm-10">
                        <div className="form-check">
                          <input
                            className={`form-check-input ${errors.userType ? 'is-invalid' : ''}`}
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
                            className={`form-check-input ${errors.userType ? 'is-invalid' : ''}`}
                            type="radio"
                            name="userType"
                            id="userType2"
                            value='CUSTOMER'
                            onChange={(e) => setUserType(e.target.value)}
                          >
                          </input>
                          <label className="form-check-label" htmlFor="userType2">Customer</label>
                          {errors.userType && <div className='invalid-feedback'> {errors.userType}</div>}
                        </div>
                      </div>
                    </div>
                  </fieldset>

                  <div className='form-group mb-3 col-md-12'>
                    <label className='form-label' htmlFor="inputUsername4">Username</label>
                    <input
                      type="text"
                      className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                      id="inputUsername4"
                      placeholder="Enter Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    >
                    </input>
                    {errors.username && <div className='invalid-feedback'> {errors.username}</div>}
                  </div>
                  <div className="form-group mt-3 mb-3 col-md-12">
                    <label className='form-label' htmlFor="inputEmail4">Email</label>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      id="inputEmail4"
                      placeholder="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    >
                    </input>
                    {errors.email && <div className='invalid-feedback'> {errors.email}</div>}
                  </div>
                  <div className="form-group mb-3 col-md-12">
                    <label className='form-label' htmlFor="inputPassword4">Password</label>
                    <input
                      type="password"
                      className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                      id="inputPassword4"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}></input>
                    {errors.password && <div className='invalid-feedback'> {errors.password}</div>}
                  </div>

                  <details>
                    <summary>Enter Address</summary>
                    <div className='row'>
                      <div className="form-group">
                        <label className='form-label' htmlFor="inputStreetNumber">Street Number:</label>
                        <input
                          type='number'
                          placeholder='Enter street number'
                          name='streetNumber'
                          value={streetNumber}
                          className={`form-control ${errors.streetNumber ? 'is-invalid' : ''}`}
                          onChange={(e) => setStreetNumber(e.target.value)}
                        >
                        </input>
                        {errors.streetNumber && <div className='invalid-feedback'> {errors.streetNumber}</div>}
                      </div>
                      <div className="form-group">
                        <label className='form-label' htmlFor="inputAddressName">Street Name:</label>
                        <input type="text" id="inputAddressName" placeholder="Main St"
                          value={streetName}
                          className={`form-control ${errors.streetNumber ? 'is-invalid' : ''}`}
                          onChange={(e) => setStreetName(e.target.value)}></input>
                        {errors.streetName && <div className='invalid-feedback'> {errors.streetName}</div>}
                      </div>
                      <div className="form-group">
                        <label className='form-label' htmlFor="inputAddress2">Address 2</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" disabled></input>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-6">
                          <label className='form-label' htmlFor="inputCity">City</label>
                          <input type="text" id="inputCity"
                            value={city}
                            className={`form-control ${errors.streetName ? 'is-invalid' : ''}`}
                            onChange={(e) => setCity(e.target.value)}></input>
                          {errors.city && <div className='invalid-feedback'> {errors.city}</div>}
                        </div>
                        <div className="form-group col-md-3">
                          <label className='form-label' htmlFor="inputState">State</label>
                          <select id="inputState" className={`form-control ${errors.state ? 'is-invalid' : ''}`}
                            onChange={(e) => setState(e.target.value)}>
                            <option value="">Select State</option>
                            <option value="Maryland">MD</option>
                            <option value="Virginia">VA</option>
                            <option value="New Jersey">NJ</option>
                            <option value={state}></option>
                          </select>
                          {errors.state && <div className='invalid-feedback'> {errors.state}</div>}
                        </div>
                        <div className="form-group col-md-2">
                          <label className='form-label' htmlFor="inputZip">Zipcode</label>
                          <input type='number' id="inputZip"
                            value={zipcode}
                            className={`form-control ${errors.zipcode ? 'is-invalid' : ''}`}
                            onChange={(e) => setZipcode(e.target.value)}></input>
                          {errors.zipcode && <div className='invalid-feedback'> {errors.zipcode}</div>}
                        </div>
                      </div>

                    </div> <br />

                  </details>

                  <div className='form-group mb-3'>
                  <button type="submit" className="btn btn-success" onClick={(e) => handleRegistrationForm(e)}>Submit</button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterComponent
