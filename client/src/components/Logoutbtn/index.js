import React from 'react';
import { DropdownItem } from 'reactstrap';
import Login from '../../pages/Login';
import { useHistory  } from 'react-router-dom';
import API from '../../utils/API'



const LogoutButton = (props) => {
    const history = useHistory();

    const handlelogout = () => {
        API.logoutUser().then(data => {
            history.push('/login');
        }).catch(err => {
            return err
        });
    }

    const clearToken = () => {
        localStorage.removeItem('token');
        handlelogout();
        window.location.reload();
    }



    return (
        <DropdownItem onClick={clearToken} className="fs-4">
            Logout
        </DropdownItem>
    );
}

export default LogoutButton;