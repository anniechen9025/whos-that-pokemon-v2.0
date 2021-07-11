import React, { useEffect, useState } from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import API from '../../utils/API'

// const [formObject, setFormObject] = useState({
//     username: "",
//     email: "",
//     password: ""
// })

//video validator
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
// https://github.com/MyNameIsURL/react-form-validation-tutorial/blob/master/src/App.js
// https://www.youtube.com/watch?v=4CeTFW4agRw
class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.handleValidSubmit = this.handleValidSubmit.bind(this);
        this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.state = {
            email: false,
            username: "",
            password: "",
            formErrors: {
                username: "",
                email: "",
                password: ""
            }
        };
    }
    handleValidSubmit(event, values) {
        this.setState({ email: values.email });
    }

    handleInvalidSubmit(event, errors, values) {
        this.setState({ email: values.email, error: true });
    }

    closeModal() {
        this.setState({ email: false, error: false });
    }

    //?video Validater
    // handleSubmit = e => {
    //     e.preventDefault();

    //     if (formValid(this.state)) {
    //         console.log(`
    //         --SUBMITTING--
    //         UserName: ${this.state.username}
    //         Email: ${this.state.email}
    //         Password: ${this.state.password}`);
    //     } else {
    //         console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    //     }
    // };

    // handleChange = e => {
    //     e.preventDefault();
    //     const { name, value } = e.target;
    //     let formErrors = this.state.formErrors;

    //     switch (name) {
    //         case 'exampleUsername':
    //             formErrors.username = value.length < 5 && value.length > 0
    //                 ? 'minimun 5 characters required'
    //                 : '';
    //             break;
    //         case 'examplePassword':
    //             formErrors.password = value.length < 6 || value.length > 12
    //                 ? 'password should be between 6-12 digits long'
    //                 : '';
    //             break;
    //         case 'exampleEmail':
    //             formErrors.email =
    //                 emailRegex.test(value) && value.length > 0
    //                     ? ''
    //                     : 'invalid email address'
    //             break;
    //     }

    //     this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    // }


    //! Handle Post Singup
    // Handles updating component state when the user types into the input field
    // handleInputChange(event) {
    //     const { name, value } = event.target;
    //     setFormObject({ ...formObject, [name]: value })
    // };

    // When the form is submitted, use the API.signupUser method to save the book data
    // Then reload books from the database
    // handleFormSubmit(event) {
    //     event.preventDefault();
    //     if (formObject.username && formObject.password) {
    //         API.signupUser({
    //             username: formErrors.username,
    //             email: formErrors.email,
    //             password: formErrors.password
    //         })
    //             .then(() => setFormObject({
    //                 username: "",
    //                 email: "",
    //                 password: ""
    //             }))
    //             .catch(err => console.log(err));
    //     }
    // };

    render() {
        const modalError = this.state.error ? 'not' : ''; // This is just for the modal
        return (
            <div>
                <AvForm onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit}>
                    <AvField name="email" label="Email Address" type="email" required />
                    <AvField name="email" label="Email Address" type="email" required />
                    <AvField name="email" label="Email Address" type="email" required />
                    <Button color="primary">Submit</Button>
                </AvForm>

                {/* below this is just for show, it's not needed unless you want a modal upon form submission */}
                <Modal isOpen={this.state.email !== false} toggle={this.closeModal}>
                    <ModalHeader toggle={this.closeModal}>Form is {modalError} valid!</ModalHeader>
                    <ModalBody>
                        You have {modalError} successfully filled out the form and submitted it. Your email ({this.state.email}) is {modalError} valid!
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.closeModal}>Ok, got it!</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
        // return (
        //     //todo https://availity.github.io/availity-reactstrap-validation/
        //     <Form onSubmit={this.handleFormSubmit} novalidate>
        //         <h3>Signup New User</h3>
        //         <FormGroup>
        //             <Label for="exampleUsername">Username</Label>
        //             <FormText>This will be your player's name in the Pokemon game</FormText>
        //             <Input
        //                 valid
        //                 type="text"
        //                 className=""
        //                 placeholder="Username"
        //                 name="exampleUsername"
        //                 onChange={this.handleChange} />
        //             <FormFeedback valid></FormFeedback>
        //             {this.state.formErrors.username.length > 0 && (
        //                 <FormFeedback invalid className="errorMessage">{this.state.formErrors.username}</FormFeedback>
        //             )}
        //         </FormGroup>
        //         <FormGroup>
        //             <Label for="exampleEmail">Email</Label>
        //             <FormText>Please input your email</FormText>
        //             <Input noValidate
        //                 type="email"
        //                 className=""
        //                 placeholder="Email"
        //                 name="exampleEmail"
        //                 onChange={this.handleChange} />
        //             {/* <FormFeedback invalid>Please input the correct email format</FormFeedback> */}
        //             {this.state.formErrors.email.length > 0 && (
        //                 <span className="errorMessage">{this.state.formErrors.email}</span>
        //             )}
        //         </FormGroup>
        //         <FormGroup>
        //             <Label for="examplePassword">Password</Label>
        //             <FormText>Please set your password</FormText>
        //             <Input noValidate
        //                 type="password"
        //                 className=""
        //                 placeholder="Password"
        //                 name="examplePassword"
        //                 onChange={this.handleChange} />
        //             {/* <FormFeedback valid>Please create a password within 6-12 digits</FormFeedback> */}
        //             {this.state.formErrors.password.length > 0 && (
        //                 <span className="errorMessage">{this.state.formErrors.password}</span>
        //             )}
        //         </FormGroup>
        //         <FormGroup>
        //             <button type="submit" >Create User</button>
        //         </FormGroup>
        //     </Form>
        // );
    }
}

export default Signup;