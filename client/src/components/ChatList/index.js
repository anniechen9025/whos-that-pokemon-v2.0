import React from "react";
import {useEffect, useState} from "react"

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function ChatList(props) {
    // console.log(props);
    
    const [usersOnline, setUsersOnline] = useState(props.onlineUsers);

    useEffect(() => {
        setUsersOnline(props.onlineUsers)
        console.log(usersOnline);
    }, [props.onlineUsers])

    return (
        <div >
            <ul>
                {usersOnline.map(user => (
                    <li key={user.id}>
                        {user.username}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ChatList;