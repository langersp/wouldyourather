import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionDetails from './questiondetails';
import { Link } from 'react-router-dom';
import UserDetails from './userdetails';

class Leaderboard extends Component {

    questionsAnswered = user => {
        return Object.keys(user.answers).length
    }

    questionsAsked = user => {
        return user.questions.length
    }

    render() {

        const { users } = this.props;
        const userArray = [];

        Object.keys(users).map(userId => {
            userArray.push([
                userId,
                users[userId].name,
                this.questionsAsked(users[userId]),
                this.questionsAnswered(users[userId]),
                this.questionsAsked(users[userId]) + this.questionsAnswered(users[userId])
            ])
        })
        //sort the array by total questions asked/answered
        userArray.sort((a, b) => b[4] - a[4]);
        console.log(userArray)

        return (

            <div className='leaderboard'>
                <h1>Leaderboard</h1>

                {
                    userArray.map(user =>
                        <UserDetails key={user[0]} userId={user[0]} name={user[1]} questionsAsked={user[2]} questionsAnswered={user[3]} score={user[4]} />)

                }
            </div >

        )
    }
}

function mapStateToProps({ users }) {

    return {
        users
    }

}

export default connect(mapStateToProps)(Leaderboard);