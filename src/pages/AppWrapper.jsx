import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';

const AppWrapper = (props) => {
    return (
        <Router>
            <App {...props} />
        </Router>
    )
}

export default AppWrapper
