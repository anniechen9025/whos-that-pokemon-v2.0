import React from 'react';
import Login from '../Loginbtn';
import Logout from '../Logoutbtn';
import useToken from '../../utils/useToken';

//https://reactjs.org/docs/conditional-rendering.html

function LoginControl(props) {
    const { token, setToken } = useToken();

    let button;
    if (token) {
        button = <Logout />;
    }

    return (
        <div>
            {button}
        </div>
    );
} 

export default LoginControl;