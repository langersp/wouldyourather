import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/autheduser';

class AuthedUser extends Component {

    handleClick = (e) => {
        e.preventDefault();
        this.props.logout();
    }

    render() {

        const { authedUserName } = this.props;

        return (
            <div className="wyr-autheduser">
                <p>Hello, {authedUserName} (<button onClick={this.handleClick}>Logout</button>)</p>
            </div>
        )
    }
}

function mapStateToProps({ users }, { authedUser }) {
    const authedUserName = users[authedUser].name;

    return {
        authedUserName
    }

}
function mapDispatchToProps(dispatch) {
    return ({
        logout: () => { dispatch(setAuthedUser(null)); }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthedUser);