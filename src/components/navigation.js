import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AuthedUser from './autheduser';

class Navigation extends Component {


    render() {

        return (
            <div className="wyr-navigation">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/add'>New Question</NavLink>
                <NavLink to='/leaderboard' className="last">Leaderboard</NavLink>
                <AuthedUser authedUser={this.props.authedUser} />
            </div>
        )
    }
}

export default Navigation;