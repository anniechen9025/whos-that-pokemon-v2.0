import React from "react";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function List({ message }) {
    return (
        <div className="col-12 col-sm-6">
            <li>{message.message}</li>
            <span>by {message.username}</span>
        </div>
    );
}

export default List;
