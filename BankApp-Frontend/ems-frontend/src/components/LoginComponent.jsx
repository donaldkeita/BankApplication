import React, { useState } from 'react'

const LoginComponent = () => {


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');



  const [errors, setErrors] = useState({
        password: '',
        username: ''
    })


  function validateForm() {
    let valid = true;

    const errorsCopy = { ...errors };
    if (password.trim()) errorsCopy.password = '';
    else {
      valid = false;
      errorsCopy.password = 'Password is required';
    }
    if (username.trim()) errorsCopy.username = '';
    else {
      valid = false;
      errorsCopy.username = 'Username Or Email is required';
    }

    setErrors(errorsCopy);
    return valid;
  }




  function handleLoginForm(e) {

    e.preventDefault();

    if (validateForm()) {
      const loginObj = { username, password };

      console.log(loginObj)

      loginAPICall(loginObj).then((response) => {
        console.log(response)
      }).catch(error => console.error(error))
    }

  }


  return (
    <div className='container'>
      <br /><br />
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <div className='card'>
            <div className='card-header'>
              <h2 className='text-center'>Login Form</h2>

              <div className='card-body'>

                <form>
                  <div className='form-group mb-3 col-md-12'>
                    <label className='form-label' htmlFor="inputUsername4">Username or Email</label>
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
                  <div className='form-group mb-3'>
                  <button type="submit" className="btn btn-success" onClick={(e) => handleLoginForm(e)}>Submit</button>
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

export default LoginComponent
