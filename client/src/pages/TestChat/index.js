import React, { useEffect, useState } from "react";
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';
// https://www.npmjs.com/package/uuid
// uuidv4();
import List from "../../components/List";
import ChatList from "../../components/ChatList";
import API from '../../utils/API';
import "./style.css";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:3001";
const socket = socketIOClient(ENDPOINT);

//todo list can use reactstrap (Header Icon)

class TestChat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            online: [],
            userMessages: [],
            messages: ""
        }
    }

    messaheChild() {
        socket.on('chat message', (data) => {
            console.log(data)
            let messageArray = this.state.userMessages;
            messageArray.push(data)
            this.setState({ userMessages: messageArray })
        })
    }

    handleInputChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    handleCloseSubmitted = e => {
        e.preventDefault();
        this.props.history.push('/')
    }

    handleSubmit = e => {
        e.preventDefault();
        socket.emit("chat message", { message: this.state.messages, username: this.state.userName, id: uuidv4() })
        this.setState({ messages:""});
    }

    componentDidMount() {
        API.getUsername()
            .then(data => {
                // console.log(data);
                this.setState({ userName: data.data })
            });
            this.messaheChild()
            this.handleOnlineUsers()
    }

    handleOnlineUsers() {
        let onlineUsers = this.state.online
        
            API.getUsername().then(data => {
                onlineUsers.push(data.data)
                this.setState({online: onlineUsers})
                // console.log(this.state.online);
                socket.emit("user online", data.data)
                socket.on("user joined", (data) => {
                    console.log(data);
                })
            })
         
    }
    render() {
        return (
            <div className="chat_window">
                <div className="top_menu">
                    <div className="buttons">
                        <div onClick={this.handleCloseSubmitted} className="button close"></div>
                        <div onClick={this.handleCloseSubmitted} className="button minimize"></div>
                        <div onClick={this.handleCloseSubmitted} className="button maximize"></div>
                    </div>
                    <div className="title">Chat</div>
                </div>
                <Container>
                    <Row>
                        <Col className="chatlist">
                        <ChatList userName = {this.state.userName}/>
                        </Col>
                        <Col xs="9" sm="9" >
                            <ul id="messages" className="messages">
                                {this.state.userMessages.map((message) => {
                                    return <List message={message.message} key={message.id} username={message.username} />
                                })}
                            </ul>
                        </Col>
                    </Row>
                </Container>

                <div className="bottom_wrapper clearfix">
                    <i id="typing"></i>
                    <Form id="form">
                        <FormGroup className="message_input_wrapper">
                            <Input id="message" name = "messages" className="message_input" placeholder="Type your message here..." onChange = {this.handleInputChange} value = {this.state.messages}/>
                        </FormGroup>
                        <Button className="send_message" onClick={this.handleSubmit}>Send</Button>
                    </Form>
                </div>
            </div>

        )
    }
}

// onChange={e => this.state.messages = e.target.value} 
// function TestChat() {
//     const [message, setMessage] = useState();

//     const handleSubmit = async function (e) {
//         e.preventDefault();
//         await socket.emit("chat message", { message })
//         setMessage("")
//         return true;
//     }
// }


export default TestChat;
