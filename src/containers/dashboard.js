import React, { Component } from 'react';
import { connect } from 'react-redux';


class Dashboard extends Component {
	render() {
		console.log(this.props)
		return (
			<div>

			</div>
		)
	}
}

function mapStateToProps({ users }) {
	return {
		users
	}
}

export default connect(mapStateToProps)(Dashboard);