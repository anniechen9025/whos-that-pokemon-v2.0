import React from 'react';
import { DropdownItem } from 'reactstrap';
import Login from '../../pages/Login';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useHistory } from "react-router";



const LoginButton = (props) => {




    return (
        <DropdownItem  className="fs-4" href="/login">
            Login
        </DropdownItem>
    );
}

export default LoginButton;