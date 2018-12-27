import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Question extends Component {


    render() {

        const { answers } = this.props.authedUserDetails;
        const { id, optionOne, optionTwo } = this.props.question;
        const { activeTab } = this.props;

        let questionClassName = answers[id] !== undefined ? 'wyr-question hide' : 'wyr-question';

        if (activeTab === 'answered') {
            questionClassName = answers[id] !== undefined ? 'wyr-question' : 'wyr-question  hide';
        }

        return (
            <div className={questionClassName} id={id}>
                <img src={this.props.questionAuthorDetails.avatarURL} alt={this.props.questionAuthorDetails.name} className="wyr-question__avatar" />
                <p>{this.props.questionAuthorDetails.name} asks...</p>
                <h2>Would you Rather?</h2>
                <div className="wyr-question__option-one">{optionOne.text}</div>
                Or..
                <div className="wyr-question__option-one">{optionTwo.text}</div>
                <Link to={`/question/${id}`}><button>View Poll</button></Link>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
    const question = questions[id];
    const authedUserDetails = users[authedUser];
    const questionAuthorDetails = users[question.author]

    return {
        question,
        authedUserDetails,
        questionAuthorDetails
    }

}

export default connect(mapStateToProps)(Question);