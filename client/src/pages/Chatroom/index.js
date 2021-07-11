import React, { useEffect, useState } from "react";
import Button from '../../components/Button';
import Input from '../../components/Input';
import Chatbox from '../../components/Chatbox';
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:3001";



class Chatroom extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            userName: false,
            online: [],
            userMessages: []
        }
    }
    componentDidMount() {
            const socket = socketIOClient(ENDPOINT);
            socket.emit("chat message", 'data' )// => {
          //    setResponse('data');
           // });
    }
    render () {
        return (
        <div>
            <Chatbox userMessages = {this.state.userMessages}></Chatbox>
            <Input input='Send Message'></Input>
            <Button text='Send'></Button>
        </div>

        )
    }
}

export default Chatroom;