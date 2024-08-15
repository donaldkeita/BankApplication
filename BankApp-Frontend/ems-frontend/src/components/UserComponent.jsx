import React, {useState, useEffect } from 'react'
import { createUser, getUserById } from '../services/UserService';
import { useNavigate, useParams } from 'react-router-dom';

const UserComponent = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userType, setUserType] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const navigator = useNavigate();

  const {id} = useParams();

  useEffect(() => {

    getUserById(id).then((response) => {
      setFirstName(response.data.firstName);
      setLastName(response.data.lastName);
      setUserType(response.data.userType);
      setEmail(response.data.email);
      setPassword(response.data.password);
      setUsername(response.data.username);
    }).catch(error => console.error(error))
    
  }, [id])

  function saveUser(e) {
    e.preventDefault();

    const user = {firstName, lastName, userType, email, password, username}

    console.log(user);

    createUser(user).then((response) => {
      console.log(response.data);
      navigator('/users')
    }).catch(error => console.error(error))
  }

  function pageTitle() {
    if (id) {
      return <h2 className='text-center'>Update User</h2>
    }
    else {
      return <h2 className='text-center'>Add User</h2>
    }
  }


  return (
    <div className='container'>
      <br /> 
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
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

              <button type="submit" className="btn btn-success mb-2" onClick={(e) => saveUser(e)}>Submit</button>
            </form>

          </div>
        </div>

      </div>
    </div>
  )
}

export default UserComponent
