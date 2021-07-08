import React, { useEffect, useState } from "react";
import API from '../../utils/API'
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import { Redirect } from "react-router-dom";
import Header from "../../components/Header";


//!https://auth0.com/docs/quickstart/spa/react/01-login

function Login() {
    // Setting our component's initial state
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    // const [state, setState] = useState({ redirect: null });

    async function loginUserFormSubmit(credential) {
        //todo: since my login user has req.session do i need to setup local storage?
        if (email && password) {
            API.loginUser(credential)
                .then(data => console.log(data))
                .catch(err => console.log(err));
        }
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUserFormSubmit({
            email,
            password
        });
        // setToken(token);
    }

    return (
        //!https://stackoverflow.com/questions/45089386/what-is-the-best-way-to-redirect-a-page-using-react-router
        <div>
            {/* <Header /> */}
            <Form inline onSubmit={handleSubmit}>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" onChange={e => setEmail(e.target.value)} />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="examplePassword" className="mr-sm-2">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" onChange={e => setPassword(e.target.value)} />
                </FormGroup>
                <Button>Submit</Button>
            </Form>

        </div>
    );
}

// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
// }

export default Login;
