import React from 'react';

export function ChatBox(props) {
    return (
        <div class="chatbox">
        <ul id="messages"></ul>
            <form id="form" action="">
            <input id="input" autocomplete="off" placeholder=""/><button>Send</button>
            {/* {{renderUser.name}} */} Create variable for this
            </form>
        </div>
    )
}
