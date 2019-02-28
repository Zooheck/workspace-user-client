import React from 'react'
import { NavLink } from 'react-router-dom'

import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="navbar">
        <div className="link-container">
            <NavLink to="/login">Log In</NavLink>
            <NavLink to="/users">View Users</NavLink>
            <button>Log Out</button>
        </div>
    </nav>
  )
}

export default NavBar
