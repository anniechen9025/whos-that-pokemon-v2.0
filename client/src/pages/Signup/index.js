import React, { useEffect, useState }  from 'react';
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import API from '../../utils/API'

const Signup = (props) => {

    const [formObject, setFormObject] = useState({
        username: "",
        email: "",
        password: ""
    })

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.username && formObject.password) {
            API.signupUser({
                username: formObject.username,
                email: formObject.email,
                password: formObject.password
            })
                .then(() => setFormObject({
                    username: "",
                    email: "",
                    password: ""
                }))
                .catch(err => console.log(err));
        }
    };

    return (
        //todo user reactstrap or bootstrap? https://getbootstrap.com/docs/4.6/components/forms/#validation or https://reactstrap.github.io/components/form/
        <Form>
            <h3>Signup New User</h3>
            <FormGroup>
                <Label for="exampleUsername">Username</Label>
                <FormText>This will be your player's name in the Pokemon game</FormText>
                <Input />
                <FormFeedback>You will not be able to see this</FormFeedback>
            </FormGroup>
            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <FormText>Please input your email</FormText>
                <Input invalid />
                <FormFeedback invalid>Please input the correct email format</FormFeedback>
                
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Password</Label>
                <FormText>Please set your password</FormText>
                <Input valid />
                <FormFeedback valid>Please create a password within 6-12 digits</FormFeedback>
                
            </FormGroup>
        </Form>
    );
}

export default Signup;