import React from 'react';
import { DropdownItem } from 'reactstrap';
import Login from '../../pages/Login';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useHistory } from "react-router";



const LogoutButton = (props) => {


    // const history = useHistory()

    const clearToken = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }



    return (
        <DropdownItem onClick={clearToken} className="fs-4">
            Logout
        </DropdownItem>
    );
}

export default LogoutButton;