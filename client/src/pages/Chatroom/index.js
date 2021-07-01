import React, { useEffect, useState } from "react";
import Button from '../../components/Button';
import Input from '../../components/Input';
import Chatbox from '../../components/Chatbox'


class Chatroom extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            userName: false,
            online: [],
            userMessages: []
        }
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