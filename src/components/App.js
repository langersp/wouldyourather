import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { handleInitialData } from '../actions/shared';

import LoginForm from './login';
import Dashboard from './dashboard';
import Navigation from './navigation';
import QuestionDetails from './questiondetails';
import NewQuestion from './newquestion';
import Leaderboard from './leaderboard';

import '../App.css';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div className="App">

        <Router>
          {this.props.authedUser === null ? (
            <LoginForm />
          ) : (
              <div>
                <Navigation authedUser={this.props.authedUser} logout={this.props.logout} />
                <Route path='/' exact component={Dashboard} />
                <Route path='/add' component={NewQuestion} />
                <Route path='/question/:id' component={QuestionDetails} />
                <Route path='/leaderboard' component={Leaderboard} />
              </div>
            )}
        </Router>

      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App);
