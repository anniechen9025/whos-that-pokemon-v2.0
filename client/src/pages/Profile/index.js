import React, { useEffect, useState } from "react";
import API from '../../utils/API'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';


function Profile() {
    const [username, setUserName] = useState();
    const [pkamount, setPkAmount] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [rank, setRank] = useState();
    const imagesource = [
        "",
        ""
    ];

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

    function playerRank(amount){
        if(amount >= 0 && amount < 10){
            setRank("Beginner Trainer")
        }else if(amount >10 && amount< 30){
            setRank ("Intermediate Trainer")
        }else if(amount >30 && amount < 60){
            setRank ("Advance Trainer")
        }else if(amount >60 && amount < 100){
            setRank ("Proficient Trainer")
        }else if(amount >100 && amount < 150){
            setRank ("Master Trainer")
        }else if(amount >150){
            setRank ("Grand Master")
        }
    }

    useEffect(() => {
        UserInfo();
    }, []);

    

    return (
        <Container>
            <Row>
                
                <Col xs="6" sm="4"><Card>
                    <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag="h5">Hi, {username}!</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{rank}</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Update Password</Button>
                    </CardBody>
                </Card></Col>
                <Col sm="4"></Col>
                <Col xs="6" sm="4">
                Profile
                </Col>
            </Row>
        </Container>
    )
}


export default Profile;
