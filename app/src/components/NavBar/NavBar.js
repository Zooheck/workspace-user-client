import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import { withRouter } from 'react-router-dom'

import './NavBar.css'

class NavBar extends Component {
  logOut = e => {
    e.preventDefault();
    localStorage.removeItem('token');
    this.props.history.push('/login');
  }
  render() {
    return (
      <nav className="navbar">
          <div className="link-container">
              <NavLink to="/login">Log In</NavLink>
              <NavLink to="/users">View Users</NavLink>
              <button onClick={this.logOut}>Log Out</button>
          </div>
      </nav>
    )
  }
}

export default withRouter(NavBar)