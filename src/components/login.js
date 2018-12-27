import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/autheduser';


class LoginForm extends Component {

	handleChange = (e) => {

		const autheduser = e.target.value;
		const { dispatch } = this.props;

		//handle authedUser login
		dispatch(setAuthedUser(autheduser));
	}

	render() {

		const { users } = this.props;

		return (
			<div className="wyr-login">
				<h1>Login</h1>
				<p>Please select a user:</p>
				<select onChange={this.handleChange}>
					<option>Please select</option>
					{users.map((user) => (
						<option key={user.id} value={user.id}>{user.name}</option>
					))}

				</select>
			</div>

		)
	}
}

function mapStateToProps({ users }) {
	return {
		users: Object.values(users)
	}
}

export default connect(mapStateToProps)(LoginForm);