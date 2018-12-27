import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetails extends Component {

    render() {

        const { name, questionsAsked, questionsAnswered, score } = this.props;

        return (
            <div className="wyr-user-details">
                <div className="wyr-user-details__name"><strong>{name}</strong></div>
                <div>Number of Questions Asked: {questionsAsked}</div>
                <div>Number of Questions Answered: {questionsAnswered}</div>
                <div className="wyr-user-details__score"><span>Score</span><br />{score}</div>
            </div>
        )
    }
}


export default UserDetails;