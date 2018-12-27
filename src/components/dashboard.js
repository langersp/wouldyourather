import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionList from './questionlist';

class Dashboard extends Component {

	render() {
		return (
			<div>
				<QuestionList />
			</div>
		)
	}
}

function mapStateToProps({ authedUser, questions }) {
	return {
		authedUser
	}
}

export default connect(mapStateToProps)(Dashboard);