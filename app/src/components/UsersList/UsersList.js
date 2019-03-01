import React, { Component } from 'react'
import axios from 'axios'
import User from '../User/User';

export default class UsersList extends Component {
  state = {
    users: []
  }
  componentDidMount() {
    axios.get('/users').then(res => {
      this.setState({ users: res.data.users })
    })
  }
  render() {
    return (
      <div>
        <h1>Users: </h1>
        {this.state.users.map(user => {
          return <User user={user}/>
        })}
      </div>
    )
  }
}
