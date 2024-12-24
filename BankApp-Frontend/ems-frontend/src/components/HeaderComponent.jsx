import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="https://www.mybankapplication.com">Address Managment System</a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className='nav-link' to='/addresses'>Addresses</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link' to='/users'>Users</NavLink>
                            </li>
                        </ul>
                    </div>
                    <ul className="navbar-nav">
                        <li className='nav-item'>
                            <NavLink to="/register" className='nav-link'>Register</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent

