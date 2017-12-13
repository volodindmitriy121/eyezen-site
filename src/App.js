import React, { Component } from 'react';
import './App.css';
import Users from './components/Users'
import UsersPost2 from './components/UsersPost2'
import UsersPostWithForm from './components/UsersPostWithForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <UsersPostWithForm/>
      </div>
    );
  }
}

export default App;
