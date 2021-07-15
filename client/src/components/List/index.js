import React from "react";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function List(prop ) {

    return (
        <div className="col-12 col-sm-6">
            <li>{prop.message}</li>
            <span>by {prop.username}</span>
        </div>
    );
}

export default List;