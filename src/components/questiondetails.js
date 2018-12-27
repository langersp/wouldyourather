import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleUpdateQuestionAnswer } from '../actions/questions';
import { Redirect } from 'react-router-dom';

class QuestionDetails extends Component {

    state = {
        selectedOption: '',
        toHome: false
    }

    handleClick = (e, optionValue) => {
        console.log(optionValue)
        this.setState({ 'selectedOption': optionValue })
    }


    handleSubmit = (e) => {

        e.preventDefault();
        console.log(this.state)

        const { dispatch } = this.props;
        const { selectedOption } = this.state;
        const { id } = this.props.question;

        dispatch(handleUpdateQuestionAnswer(id, selectedOption));

        this.setState({ toHome: true })

    }

    render() {

        const { toHome } = this.state;

        if (toHome === true) {
            return <Redirect to='/' />
        }

        const { answers, name } = this.props.authedUserDetails;
        const { id, optionOne, optionTwo } = this.props.question;

        const optionOneVotes = optionOne.votes.length;
        const optionTwoVotes = optionTwo.votes.length;
        const totalVotes = optionOneVotes + optionTwoVotes;


        return (
            <div id={id}>

                {answers[id] === undefined ? (
                    <div className="wyr-answer">
                        <p>{this.props.questionAuthorDetails.name} asks...</p>
                        <h2>Would you Rather?</h2>
                        <form onSubmit={this.handleSubmit}>
                            <div className="wyr-question__option-one"><input type="radio" id="optionOne" name="questionOption" onClick={(e) => this.handleClick(e, "optionOne")} />{optionOne.text}</div>
                            Or...
                            <div className="wyr-question__option-one"><input type="radio" id="optionTwo" name="questionOption" onClick={(e) => this.handleClick(e, "optionTwo")} />{optionTwo.text}</div>
                            <input type="submit" value="Submit" />
                        </form></div>
                ) : (
                        <div>
                            <p>Asked by {this.props.questionAuthorDetails.name}</p>
                            <h2>Results:</h2>

                            <div className={answers[id] === 'optionOne' ? 'wyr-user-answer' : ''}>
                                Would you rather {optionOne.text}
                                {answers[id] === 'optionOne' ? <span>Your vote</span> : ''}
                                <p>{optionOneVotes} out of {totalVotes} ({optionOneVotes / totalVotes * 100}%)</p>
                            </div>
                            <div className={answers[id] === 'optionTwo' ? 'wyr-user-answer' : ''}>
                                Would you rather {optionTwo.text}
                                {answers[id] === 'optionTwo' ? <span>Your vote</span> : ''}
                                <p>{optionTwoVotes} out of {totalVotes} ({Math.round(optionTwoVotes / totalVotes * 100)}%)</p>

                            </div>
                        </div>
                    )}
            </div>
        )
    }
}
function mapStateToProps({ questions, users, authedUser }, props) {
    const { id } = props.match.params;
    console.log(id)
    const question = questions[id];
    console.log(question);
    const authedUserDetails = users[authedUser];
    const questionAuthorDetails = users[question.author]
    //console.log("user is", user)
    return {
        question,
        authedUserDetails,
        questionAuthorDetails
    }

}

export default connect(mapStateToProps)(QuestionDetails);