import React from 'react';

function ChatBox(props) {
    return (
        <div className="chatbox">
            <ul id="messages">
                {props.userMessages.map(message => (
                    <li key={message.id}>
                        {message.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ChatBox;
