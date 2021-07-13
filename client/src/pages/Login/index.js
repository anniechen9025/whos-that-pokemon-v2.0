import React, { useEffect, useState } from "react";
import API from '../../utils/API'
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Header from "../../components/Header";

async function loginAuth(credentials) {
    return fetch('http://localhost:3001/authlogin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}


function Login({ setToken }) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    async function loginUserFormSubmit(credential) {
        console.log(credential);
        API.loginUser(credential)
            .then(async data => {
                console.log(data)
                if(data.status === 200){
                    const token = await loginAuth({
                        email,
                        password
                    });
                    setToken(token);
                }
                return data;
            })
            .catch(err => {
                return err
            });
    }

    const handleSubmit = async function (e) {
        e.preventDefault();
        await loginUserFormSubmit(
            {
                email,
                password
            }
        )
    }

    return (
        <div>
            <Header />
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

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;
