import React, { Component } from 'react';
import logo from './logo.svg';
import LoginForm from './components/login';
import './App.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="App">
        <LoginForm />
      </div>
    );
  }
}

export default App;
