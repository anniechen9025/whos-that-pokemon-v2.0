import React, { useEffect, useState } from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText,
} from 'reactstrap';
import API from '../../utils/API';

// password regex
// https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a

// const [formObject, setFormObject] = useState({
//     username: "",
//     email: "",
//     password: ""
// })

//video validator
// const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
// const formValid = ({ formObjects, ...rest }) => {
//     let valid = true;

//     // validate form errors being empty
//     Object.values(formObjects).forEach(val => {
//         val.length < 0 && (valid = false);
//     });

//     // validate the form was filled out
//     Object.values(rest).forEach(val => {
//         val === null && (valid = false);
//     });

//     return valid;
// };

// https://www.coursera.org/lecture/front-end-react/exercise-video-controlled-form-validation-ezz4V
// https://github.com/MyNameIsURL/react-form-validation-tutorial/blob/master/src/App.js
// https://www.youtube.com/watch?v=4CeTFW4agRw
class Signup extends React.Component {

    constructor(props) {
        super(props);
        // this.handleValidSubmit = this.handleValidSubmit.bind(this);
        // this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
        // this.closeModal = this.closeModal.bind(this);
        this.state = {
            email: "",
            username: "",
            password: ""
        };
    }
    // handleValidSubmit(event, values) {
    //     this.setState({ email: values.email });
    //     this.setState({ username: values.username });
    //     this.setState({ password: values.password });
    // }

    // handleInvalidSubmit(event, errors, values) {
    //     this.setState({ email: values.email, error: true });
    //     this.setState({ username: values.username, error: true });
    //     this.setState({ password: values.password, error: true });
    // }

    // closeModal() {
    //     this.setState({ email: "", error: false });
    // }


    handleSubmit = (e) => {
        e.preventDefault();
        this.handleInputState();
        console.log(`
            --SUBMITTING--
            UserName: ${this.state.username}
            Email: ${this.state.email}
            Password: ${this.state.password}`);

        if (this.state.username && this.state.password && this.state.email) {

            API.signupUser({
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            }).then(() => {
                this.setState({ email: "" });
                this.setState({ username: "" });
                this.setState({ password: "" });
            })
                .catch(err => console.log(err));
        }
        else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
        this.props.history.push('/')
    };

    handleInputState() {
        this.setState({ email: this.state.email });
        this.setState({ username: this.state.username });
        this.setState({ password: this.state.password });
    }


    render() {
        // const modalError = this.state.error ? 'not' : ''; // This is just for the modal
        return (
            <div className="themed-container" fluid="md">
                <AvForm
                    // onValidSubmit={this.handleValidSubmit}
                    // onInvalidSubmit={this.handleInvalidSubmit}
                    onSubmit={this.handleSubmit}
                >
                    <AvField
                        name="emailCustomMessage"
                        label="Email"
                        type="text"
                        onChange={e => this.state.email = e.target.value}
                        validate={{
                            required: { value: true, errorMessage: 'Please enter an email' },
                            pattern: { value: "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/", errorMessage: 'Please enter in a valid email format' },
                            minLength: { value: 6, errorMessage: 'Your name must be between 6 and 16 characters' },
                            maxLength: { value: 50, errorMessage: 'Your name must be between 6 and 50 characters' }
                        }} />
                    <AvField
                        name="usernameCustomMessage"
                        label="Username"
                        type="text"
                        onChange={e => this.state.username = e.target.value}
                        validate={{
                            required: { value: true, errorMessage: 'Please enter a username' },
                            pattern: { value: '^[A-Za-z0-9]+$', errorMessage: 'Your username must be composed only with letter and numbers' },
                            minLength: { value: 6, errorMessage: 'Your name must be between 6 and 16 characters' },
                            maxLength: { value: 16, errorMessage: 'Your name must be between 6 and 16 characters' }
                        }} />
                    <AvField
                        name="originalpassword"
                        label="Password"
                        type="password"
                        onChange={e => this.state.password = e.target.value}
                        validate={{
                            required: { value: true, errorMessage: 'Please enter a password' },
                            // pattern: { value: '/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/', errorMessage: 'Your password must be at least one letter, one number and one special character' },
                            minLength: { value: 6, errorMessage: 'Your name must be between 6 and 20 characters' },
                            maxLength: { value: 20, errorMessage: 'Your name must be between 6 and 20 characters' }
                        }} />
                    <AvField
                        name="password"
                        label="ConfirmedPassword"
                        type="password"
                        validate={{
                            match:{value:'originalpassword', errorMessage:'Please enter your set password again'},
                            required: { value: true, errorMessage: 'Please enter a password' },
                            // pattern: { value: '/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/', errorMessage: 'Your password must be at least one letter, one number and one special character' },
                            minLength: { value: 6, errorMessage: 'Your name must be between 6 and 20 characters' },
                            maxLength: { value: 20, errorMessage: 'Your name must be between 6 and 20 characters' }
                        }} />
                    <Button
                        color="primary"
                    >Submit</Button>
                </AvForm>

                {/* below this is just for show, it's not needed unless you want a modal upon form submission */}
                {/* <Modal isOpen={this.state.email !== false && this.state.username !== false && this.state.password !== false}
                    toggle={this.closeModal}>
                    <ModalHeader toggle={this.closeModal}>Form is {modalError} valid!</ModalHeader>
                    <ModalBody>
                        You have {modalError} successfully filled out the form and submitted it. Your email ({this.state.email}) is {modalError} valid!
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.closeModal}>Ok, got it!</Button>
                    </ModalFooter>
                </Modal> */}
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
