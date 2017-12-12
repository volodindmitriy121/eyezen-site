import React, { Component } from 'react';
import './App.css';
import Users from './components/Users'
import UsersPost2 from './components/UsersPost2'

class App extends Component {
  render() {
    return (
      <div className="App">
        <UsersPost2/>
      </div>
    );
  }
}

export default App;
