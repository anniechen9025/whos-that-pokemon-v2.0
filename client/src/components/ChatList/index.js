import React from "react";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function ChatList(props) {
    // console.log(props);
    return (
        <div >
            <ul>
                <li>
                    {props.userName}
                </li>
            </ul>
        </div>
    );
}

export default ChatList;