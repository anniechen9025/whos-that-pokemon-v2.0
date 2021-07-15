import React from 'react';
import { DropdownItem } from 'reactstrap';

function LogoutButton(props) {
    return (
        <DropdownItem onClick={props.onClick} className="fs-4">
            Logout
        </DropdownItem>
    );
}

export default LogoutButton;