import React, { useEffect, useState } from 'react';
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import API from '../../utils/API'

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    // validate the form was filled out
    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });

    return valid;
};

// https://www.coursera.org/lecture/front-end-react/exercise-video-controlled-form-validation-ezz4V
class Signup extends React.Component {

    constructor(props) {
        super(props);

        this, state = {
            email: "",
            username: "",
            password: "",
            formErrors: {
                username: "",
                email: "",
                password: ""
            }
        };
    }

    handleSubmit = e => {
        e.preventDefault();

        if (formValid(this.state)) {
            console.log(`
            --SUBMITTING--
            UserName: ${this.state.username}
            Email: ${this.state.email}
            Password: ${this.state.password}`);
        } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
    };

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;

        switch (name) {
            case 'exampleUsername':
                formErrors.username = value.length < 5 && value.length > 0
                    ? 'minimun 5 characters required'
                    : '';
                break;
            case 'examplePassword':
                formErrors.password = value.length < 6 && value.length > 12
                    ? 'password should be 6-12 digits'
                    : '';
                break;
            case 'exampleEmail':
                formErrors.email =
                    emailRegex.test(value) && value.length > 0
                        ? ''
                        : 'invalid email address'
                break;
        }

        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    }
    // const[formObject, setFormObject] = useState({
    //     username: "",
    //     email: "",
    //     password: ""
    // })



    // Handles updating component state when the user types into the input field
    // handleInputChange(event) {
    //     const { name, value } = event.target;
    //     setFormObject({ ...formObject, [name]: value })
    // };

    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.username && formObject.password) {
            API.signupUser({
                username: formErrors.username,
                email: formErrors.email,
                password: formErrors.password
            })
                .then(() => setFormObject({
                    username: "",
                    email: "",
                    password: ""
                }))
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            //todo user reactstrap or bootstrap? https://getbootstrap.com/docs/4.6/components/forms/#validation or https://reactstrap.github.io/components/form/
            <Form onsubmit={this.handleFormSubmit} novalidate>
                <h3>Signup New User</h3>
                <FormGroup>
                    <Label for="exampleUsername">Username</Label>
                    <FormText>This will be your player's name in the Pokemon game</FormText>
                    <Input
                        type="text"
                        className=""
                        placeholder="Username"
                        name="exampleUsername"
                        onchange={this.handleChange} />
                    {/* <FormFeedback>You will not be able to see this</FormFeedback> */}
                    {formErrors.username.length > 0 && (
                        <span className="errorMessage">{formErrors.username}</span>
                    )}
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <FormText>Please input your email</FormText>
                    <Input novalidate
                        type="email"
                        className=""
                        placeholder="Email"
                        name="exampleEmail"
                        onchange={this.handleChange} />
                    {/* <FormFeedback invalid>Please input the correct email format</FormFeedback> */}
                    {formErrors.email.length > 0 && (
                        <span className="errorMessage">{formErrors.email}</span>
                    )}
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <FormText>Please set your password</FormText>
                    <Input novalidate
                        type="password"
                        className=""
                        placeholder="Password"
                        name="examplePassword"
                        onchange={this.handleChange} />
                    {/* <FormFeedback valid>Please create a password within 6-12 digits</FormFeedback> */}
                    {formErrors.password.length > 0 && (
                        <span className="errorMessage">{formErrors.password}</span>
                    )}
                </FormGroup>
                <FormGroup>
                    <button type="submit" >Create User</button>
                </FormGroup>
            </Form>
        );
    }
}

export default Signup;