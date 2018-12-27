import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';
import { Redirect } from 'react-router-dom';

class NewQuestion extends Component {

    state = {
        questionOneText: '',
        questionTwoText: '',
        toHome: false
    }

    handleChange = (e, target) => {
        const value = e.target.value;

        this.setState({
            [target]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)

        const { dispatch } = this.props;
        const { questionOneText, questionTwoText } = this.state;

        dispatch(handleAddQuestion(questionOneText, questionTwoText));

        this.setState({ toHome: true })
    }


    render() {

        const { questionOneText, questionTwoText, toHome } = this.state;

        if (toHome === true) {
            return <Redirect to='/' />
        }

        return (
            <div className="wyr-new-question">
                <form onSubmit={this.handleSubmit}>
                    <h1>Create New Question</h1>

                    <p>Complete the question:</p>
                    <p>Would you Rather...</p>

                    <div className="wyr-input"><input type="text" id="optionOne" placeholder="Enter option one text here" onChange={(event) => this.handleChange(event, 'questionOneText')} /></div>
                    <div className="wyr-input"><input type="text" id="optionTwo" placeholder="Enter option two text here" onChange={(event) => this.handleChange(event, 'questionTwoText')} /></div>
                    <div className="wyr-input wyr-input--submit"><input type="submit" value="Submit" disabled={questionOneText === '' || questionTwoText === ''} /></div>
                </form>
            </div>
        )
    }
}


export default connect()(NewQuestion);