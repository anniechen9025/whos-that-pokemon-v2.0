import React from 'react';
import { DropdownItem } from 'reactstrap';

function LoginButton(props) {
    return (
        <DropdownItem onClick={props.onClick} className="fs-4">
            Login
        </DropdownItem>
    );
}

export default LoginButton; 
