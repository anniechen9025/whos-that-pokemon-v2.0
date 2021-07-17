import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from '../../pages/Signup';

function loginSignup() {


    //! https://reactstrap.github.io/components/form/
    return (
        <Router>
            <Route exact path="/login/signup" component={Signup} />
        </Router>
    );
}

export default loginSignup;
