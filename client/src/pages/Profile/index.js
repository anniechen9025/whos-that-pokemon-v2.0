import React, { useEffect, useState } from "react";
import API from '../../utils/API'
import ChatImage from "../../components/CardImage";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

// console.log(image);

function Profile() {
    const [username, setUserName] = useState();
    const [pkamount, setPkAmount] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [rank, setRank] = useState();
    const [imageNumber, setImageNumber] = useState();
    const [hide, setHide] = useState();
    const imagesource = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];

    function UserInfo() {
        API.getUserInfo()
            .then(data => {
                setUserName(data.data.username);
                const Amount = data.data.pokemon_amount;
                setEmail(data.data.email);
                playerRank(Amount);
            })
            .catch(err => {
                return err
            });
    }

    function updatePassword(variable) {
        API.updatePassword(variable)
            .then(data => {
                return data
            })
            .catch(err => {
                return err
            });
    }

    function handleSubmit(e) {
        e.preventDefault();
        updatePassword(
            {
                email,
                password
            }
        )
    }

    function chooseRandomIndex(length) {
        return Math.floor(Math.random() * length);
    }

    function playerRank(amount) {
        setPkAmount(amount)
        if (amount >= 0 && amount < 10) {
            setRank("Beginner Trainer")
            setImageNumber("1")
        } else if (amount >= 10 && amount < 30) {
            setRank("Intermediate Trainer")
            setImageNumber("2")
        } else if (amount >= 30 && amount < 60) {
            setRank("Advance Trainer")
            setImageNumber("3")
        } else if (amount >= 60 && amount < 100) {
            setRank("Proficient Trainer")
            setImageNumber("4")
        } else if (amount >= 100 && amount < 150) {
            setRank("Master Trainer")
            setImageNumber("5")
        } else if (amount >= 150) {
            setRank("Grand Master")
            setImageNumber("6")
        }
    }


    useEffect(() => {
        // setImageNumber(chooseRandomIndex(imagesource.length))
        // console.log(imageNumber);
        UserInfo();
        setHide(false);
        console.log(imageNumber);
    }, []);

    //todo when console log is undefine but later number will pops up 
    // console.log(imageNumber);


    return (
        <Container>
            <Row>
                <Col></Col>
                <Col s="6" sm="4">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h1">Hi, {username}!</CardTitle>
                            <br></br>
                            <h4>Rank:</h4>
                            <CardSubtitle tag="h5" className="mb-2 text-muted">{rank}</CardSubtitle>
                            <br></br>
                            <CardSubtitle tag="h5" className="mb-2 text-muted">Total Pokemon #: {pkamount}</CardSubtitle>
                            <br></br>
                            <CardText>Trainers, you can check your rank and update your account password below,</CardText>
                            <CardText>Enjoy your journey!</CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col s="6" sm="4">
                    <div>
                        {imageNumber && <ChatImage imagenumber={imageNumber} />}
                        {/* {imageNumber && <CardImg id= "pokemon_image" top width="100%" src={`/public/image/${imageNumber}.png`} alt="Card image cap" />} */}
                    </div>
                </Col>
                <Col></Col>
            </Row>

            <br></br>

            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <AvForm
                        onSubmit={handleSubmit}
                    >
                        <AvField
                            name="emailCustomMessage"
                            label="Email"
                            type="text"
                            onChange={e => setEmail(e.target.value)}
                            validate={{
                                required: { value: true, errorMessage: 'Please enter an email' },
                                pattern: { value: "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/", errorMessage: 'Please enter in a valid email format' },
                                minLength: { value: 6, errorMessage: 'Your name must be between 6 and 16 characters' },
                                maxLength: { value: 50, errorMessage: 'Your name must be between 6 and 50 characters' }
                            }} />
                        <AvField
                            name="originalpassword"
                            label="New Password"
                            type="password"
                            onChange={e => setPassword(e.target.value)}
                            validate={{
                                required: { value: true, errorMessage: 'Please enter a password' },
                                // pattern: { value: '/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/', errorMessage: 'Your password must be at least one letter, one number and one special character' },
                                minLength: { value: 6, errorMessage: 'Your name must be between 6 and 20 characters' },
                                maxLength: { value: 20, errorMessage: 'Your name must be between 6 and 20 characters' }
                            }} />
                        <AvField
                            name="password"
                            label="Confirmed New Password"
                            type="password"
                            validate={{
                                match: { value: 'originalpassword', errorMessage: 'Please enter your set password again' },
                                required: { value: true, errorMessage: 'Please enter a password' },
                                // pattern: { value: '/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/', errorMessage: 'Your password must be at least one letter, one number and one special character' },
                                minLength: { value: 6, errorMessage: 'Your name must be between 6 and 20 characters' },
                                maxLength: { value: 20, errorMessage: 'Your name must be between 6 and 20 characters' }
                            }} />
                        <Button>Update Password</Button>
                    </AvForm>
                </Col>
            </Row>
        </Container>
    )
}


export default Profile;
