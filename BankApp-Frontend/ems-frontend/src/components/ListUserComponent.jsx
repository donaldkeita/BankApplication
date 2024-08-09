import React, {useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { getAllUsers} from '../services/UserService';

const ListUserComponent = () => {

    const [users, setUsers] = useState([]);


    const navigator = useNavigate();

    useEffect( () => {
        getAllUsers().then((response) => {
            console.log(response.data);
            setUsers(response.data);
        }).catch(error => console.error(error));
    } , [])


  return (
      <div className='container'>
          <h2 className='text-center'>List of users</h2>
          <Link to='/add-user' className='btn btn-primary mb-2'>Add User</Link>
          <table className="table table-striped table-bordered">
              <thead>
                  <tr>
                      <th>User Id</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>User Type</th>
                      <th>Email</th>
                      <th>Password</th>
                      <th>Username</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      users.map(user =>
                          <tr key={user.id}>
                              <td>{user.id}</td>
                              <td>{user.firstName}</td>
                              <td>{user.lastName}</td>
                              <td>{user.userType}</td>
                              <td>{user.email}</td>
                              <td>{user.password}</td>
                              <td>{user.username}</td>
                          </tr>
                      )
                  }
              </tbody>
          </table>
      </div>
  )
}

export default ListUserComponent
