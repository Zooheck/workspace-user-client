import React from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://postgress-users-tutorial.herokuapp.com/api';
axios.interceptors.request.use(
    function(options) {
        options.headers.authorization = localStorage.getItem('token');

        return options;
    },
    function(error) {
        return Promise.reject(error);
    }
)

export default function(Component) {
    return class Authentication extends React.Component {
        render() {
          const token = localStorage.getItem('token');
          const notLoggedIn = <p>You must log in before viewing users.</p>
          return (
            <div>
              {token ? <Component {...this.props}/> : notLoggedIn}
            </div>
          )
        }
      }
      
}


