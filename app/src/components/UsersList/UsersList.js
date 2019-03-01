import React, { Component } from 'react'
import axios from 'axios'
import User from '../User/User';

import Authentication from '../Authentication/Authentication.js';

class UsersList extends Component {
  state = {
    users: []
  }
  componentDidMount() {
    axios.get('/users').then(res => {
      this.setState({ users: res.data })
    })
  }
  render() {
    return (
      <div>
        <h1>Users: </h1>
        {this.state.users.map(user => {
          return <User key={user.id} user={user}/>
        })}
      </div>
    )
  }
}

export default Authentication(UsersList);