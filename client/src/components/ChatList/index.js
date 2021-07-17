import React from "react";
import {useEffect} from "react"

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function ChatList(props) {
    // console.log(props);
    
    return (
        <div >
            <ul>
                {props.onlineUsers.map(user => (
                    <li key={user.id}>
                        {user.username}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ChatList;