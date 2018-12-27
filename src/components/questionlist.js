import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './question';

class QuestionList extends Component {

    state = {
        activeTab: 'unanswered'
    }

    handleClick = (tab) => {
        this.setState({ activeTab: tab })
    }

    render() {

        const { questions } = this.props;

        return (
            <div className="wyr-question-list" >
                <ul>
                    <li className={this.state.activeTab === 'unanswered' ? 'wyr-question-list__link active' : 'wyr-question-list__link'}><a onClick={() => this.handleClick('unanswered')}>Unanswered Questions</a></li>
                    <li className={this.state.activeTab === 'answered' ? 'wyr-question-list__link active' : 'wyr-question-list__link'}><a onClick={() => this.handleClick('answered')}>Answered Questions</a></li>
                </ul>
                {questions.map((question) => (
                    <Question id={question.id} key={question.id} activeTab={this.state.activeTab} />
                ))}
            </div >

        )
    }
}


function mapStateToProps({ questions }) {

    return {
        questions: Object.values(questions).sort((a, b) => b.timestamp - a.timestamp)
    }

}

export default connect(mapStateToProps)(QuestionList);