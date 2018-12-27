import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class PageNotFound extends Component {

    render() {
        return (
            <div>
                <h1>Ooops your Question was not found. Please return to <NavLink to='/'>Home page</NavLink> and try again</h1>
            </div>
        )
    }
}
export default PageNotFound;