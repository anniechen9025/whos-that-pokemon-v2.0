import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import List from "../../components/List";
import API from '../../utils/API';
import "./style.css";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:3001";
const socket = socketIOClient(ENDPOINT);

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

    messaheChild(){
        socket.on('chat message', (data) => {
            console.log(data)
            let messageArray = this.state.userMessages;;
            messageArray.push(data)
            this.setState({ userMessages: messageArray })
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        socket.emit("chat message", {message:this.state.messages, username:this.state.userName})
        this.messaheChild();
    }

    componentDidMount() {
        API.getUsername()
        .then(data => {
            console.log(data);
            this.setState({ userName: data.data })
        });
    }

    render() {
        return (
            <div className="chat_window">
                <div className="top_menu">
                    <div className="buttons">
                        <div className="button close"></div>
                        <div className="button minimize"></div>
                        <div className="button maximize"></div>
                    </div>
                    <div className="title">Chat</div>
                </div>
                <ul id="messages" className="messages">
                {this.state.userMessages.map((message) => {
                        return <List message={message.message} key={message.id} username={message.userName}/>
                    })}
                </ul>
                <div className="bottom_wrapper clearfix">
                    <i id="typing"></i>
                    <Form id="form">
                        <FormGroup className="message_input_wrapper">
                            <Input id="message" className="message_input" placeholder="Type your message here..." onChange={e => this.state.messages = e.target.value} />
                        </FormGroup>
                        <Button className="send_message" onClick={this.handleSubmit}>Send</Button>
                    </Form>
                </div>
            </div>

        )
    }
}

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
