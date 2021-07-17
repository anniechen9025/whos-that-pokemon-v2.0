import React from 'react';
import { DropdownItem } from 'reactstrap';
import { useHistory } from "react-router";



const LoginButton = (props) => {




    return (
        <DropdownItem  className="fs-4" href="/login">
            Login
        </DropdownItem>
    );
}

export default LoginButton;