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
  submit = e => {
    e.preventDefault();
    const url = 'https://postgress-users-tutorial.herokuapp.com/api/login';

    axios
      .post(url, this.state)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        
        this.props.history.push('/users')
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <form onSubmit={this.submit}>
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
