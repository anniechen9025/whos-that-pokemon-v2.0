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
const ENDPOINT = "https://enigmatic-reaches-30017.herokuapp.com/";
const socket = socketIOClient(ENDPOINT);
// "https://enigmatic-reaches-30017.herokuapp.com/"

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

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleCloseSubmitted = e => {
        e.preventDefault();
        this.props.history.push('/')
    }

    handleSubmit = e => {
        e.preventDefault();
        socket.emit("chat message", { message: this.state.messages, username: this.state.userName, id: uuidv4() })
        this.setState({ messages: "" });
    }

    handleKeypress = e => {
        //it triggers by pressing the enter key
        if (e.keyCode === 13) {
            this.handleSubmit();
        }
    };

    componentDidMount() {
        API.getUsername()
            .then(data => {
                // console.log(data);
                this.setState({ userName: data.data })
                this.messaheChild()
                this.handleOnlineUsers()
            });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.online !== prevState.online) {
            console.log(prevState, "what's going on");
            this.forceUpdate();
        }
    }

    handleOnlineUsers() {         
        socket.emit("user online", this.state.userName)
        socket.on("user joined", (data) => {
            API.getOnlineUsers().then(data => {
                console.log(data.data, "asdf");
                const userArray = []
                for(let i = 0; i < data.data.length; i++) {
                    let userObject = {
                        username: data.data[i].username,
                        id: uuidv4()
                    }
                    userArray.push(userObject)
                }
                this.setState({online: userArray})
            })
                console.log(this.state.online, "hello");
        })
        socket.on("user disconnect", (data) => {
            console.log(data, "disconnected for sure");
            const userArray = this.state.online
            let onlineUsers = userArray.filter((name) => name !== data)
            this.setState({online: onlineUsers})
            console.log(this.state.online, "These are the people who are online");
            // for (let i = 0; i < data.length; i++) {
            //     let offlineObject = {
            //         username: data.data[i].username,
            //         id: uuidv4()
            //     }
            //     offlineUser.push(offlineObject)
            // }
            // this.setState({online: offlineUser})
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
                        <ChatList userName = {this.state.userName} onlineUsers = {this.state.online}/>
                        </Col>
                        <Col xs="9" sm="9" >
                            <ul id="messages" className="messages">
                                {this.state.userMessages.map((message) => {
                                    return <List message={message.message} key={message.id} username={message.username} user={this.state.userName} />
                                })}
                            </ul>
                        </Col>
                    </Row>
                </Container>

                <div className="bottom_wrapper clearfix">
                    <i id="typing"></i>
                    <Form id="form" onSubmit={this.handleSubmit}>
                        <FormGroup className="message_input_wrapper">
                            <Input id="message" name="messages" className="message_input" placeholder="Type your message here..." onChange={this.handleInputChange} value={this.state.messages} />
                        </FormGroup>
                        <Button className="send_message" type="submit">Send</Button>
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
