import React from 'react';
import Logout from '../Logoutbtn';
import Login from '../Loginbtn';
import useToken from '../../utils/useToken';

//https://reactjs.org/docs/conditional-rendering.html

function LoginControl(props) {
    const { token, setToken } = useToken();

    let button;
    if (token) {
        button = <Logout />;
    }else{
        button = <Login />;
    }

    return (
        <div>
            {button}
        </div>
    );
} 

export default LoginControl;