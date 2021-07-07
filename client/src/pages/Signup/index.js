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
        <Form>
            <FormGroup>
                <Label for="exampleEmail">Input without validation</Label>
                <Input />
                <FormFeedback>You will not be able to see this</FormFeedback>
                <FormText>Example help text that remains unchanged.</FormText>
            </FormGroup>
            <FormGroup>
                <Label for="exampleEmail">Valid input</Label>
                <Input valid />
                <FormFeedback valid>Sweet! that name is available</FormFeedback>
                <FormText>Example help text that remains unchanged.</FormText>
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Invalid input</Label>
                <Input invalid />
                <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                <FormText>Example help text that remains unchanged.</FormText>
            </FormGroup>
        </Form>
    );
}

export default Signup;