import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthedUser from './autheduser';
import QuestionList from './questionlist';

class Dashboard extends Component {

	render() {
		const { authedUser, questionIds, logout } = this.props;
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