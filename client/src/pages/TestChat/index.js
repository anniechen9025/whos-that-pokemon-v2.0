import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./style.css";
const io = require('socket.io')

const socket = io();


function TestChat() {
    const [message, setMessage] = useState();

    const handleSubmit = async function (e) {
        e.preventDefault();
        await socket.emit("chat message", {message})
        setMessage("")
        return true;
    }

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
            <ul id="messages" className="messages"></ul>
            <div className="bottom_wrapper clearfix">
                <i id="typing"></i>
                <Form id="form">
                    <FormGroup className="message_input_wrapper">
                        <Input id="message" className="message_input" placeholder="Type your message here..." onChange={e => setMessage(e.target.value)}/>
                    </FormGroup>
                    <Button className="send_message" onClick={handleSubmit}>Send</Button>
                </Form>
            </div>
        </div>
    );
}


export default TestChat;
