import React, { Component } from 'react';
import axios from 'axios';

import './LogIn.css'

export default class LogIn extends Component {
  state = {
    username: '',
    password: ''
  }
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }
  render() {
    return (
      <form>
        <div>
          <input
            type="text"
            value={this.state.username}
            name="username"
            placeholder="username"
            onChange={this.handleChange}
            />
        </div>
        <div>
          <input
            type="text"
            value={this.state.password}
            name="password"
            placeholder="password"
            onChange={this.handleChange}
            />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    )
  }
}
