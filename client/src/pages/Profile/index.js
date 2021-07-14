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

    function UserInfo() {
        API.getUserInfo()
            .then(data => {
                console.log(data)
                setUserName(data.data.username)
                setPkAmount(data.data.pokemon_amount)
                setEmail(data.data.email)
            })
            .catch(err => {
                return err
            });
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
                        <CardTitle tag="h5">{username}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
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
