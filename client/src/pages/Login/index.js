import React, { useEffect, useState } from "react";
import API from '../../utils/API'
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Jumbotron } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Header from "../../components/Navbar2";
import { useHistory  } from 'react-router-dom';
import Signup from '../Signup';
import LoginSignup from '../../components/Loginsignup'

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


function Login({ setToken, token }) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();
    // const [signup, setSingup] = useState(false);

    async function loginUserFormSubmit(credential) {
        console.log(credential);
        API.loginUser(credential)
            .then(async data => {
                console.log(data)
                if (data.status === 200) {
                    const token = await loginAuth({
                        email,
                        password
                    });
                    setToken(token);
                    history.push('/')
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

    // useEffect(() => {
    //     if (token) {
    //         history.push('/game');
    //     }
    // }, [token])

    // const handleclicktrue = (e) => {
    //     setSingup = true;
    // }

    // const handleclickfalse = (e) => {
    //     setSingup = false;
    // }

    // let button;
    // let switchback;

    // if (signup == true) {
    //     button =
    //         <Router>
    //             <Route exact path="/login/signup" component={Signup} />
    //         </Router>;
    //     switchback =
    //         <Row>
    //             <Col sm="12" md={{ size: 6, offset: 4 }}>
    //                 <br></br>
    //                 <Button onClick={handleclickfalse} color="link" href="/login"> Back to Login </Button>
    //             </Col>
    //         </Row>;
    // }

    return (
        <div>
            {/* <Header /> */}
            <Form inline onSubmit={handleSubmit}>
                <Container>
                    <Jumbotron fluid>
                        <Container fluid>
                            <Row>
                                <Col sm={{ size: 6, order: 2, offset: 1 }}>
                                    <h1 className="display-3 text-center">Welcome Back Trainer!!</h1>
                                    <p className="lead text-center">Please Login to Start your Game!!!</p>
                                </Col>
                            </Row>
                        </Container>
                    </Jumbotron>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 4 }}>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="exampleEmail" className="mr-sm-2">Email:</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" onChange={e => setEmail(e.target.value)} />
                            </FormGroup>
                            <br></br>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="examplePassword" className="mr-sm-2">Password:</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" onChange={e => setPassword(e.target.value)} />
                            </FormGroup>
                            <br></br>
                            <Button onClick = {handleSubmit}>Submit</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 4 }}>
                            <br></br>
                            <Button color="link" href="/signup">Need to sign for new account?</Button>
                        </Col>
                    </Row>
                </Container>
            </Form>

        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;
