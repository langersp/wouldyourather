import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from './dashboard';
import '../App.css';

class App extends Component {

  componentDidMount() {
  	this.props.dispatch(handleInitialData());
  	console.log(this.props)
  }

  render() {
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}

export default connect()(App);
