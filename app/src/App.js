import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Route } from 'react-router-dom';
import LogIn from './components/LogIn/LogIn'
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />

        <Route path="/login" render={props => <LogIn {...props} />}/>
      </div>
    );
  }
}

export default App;
