import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { useEffect, useState } from "react";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function List(prop) {
    const [myOwnMessage, setMyOwn] = useState();
    const [myclass, setClass ]= useState();

    function checkuser() {
        if (prop.username == prop.user) {
            setMyOwn("mine")
            setClass("row justify-content-end")
        } else {
            setMyOwn("others")
            setClass("row justify-content-start")
        }
    }


    useEffect(() => {
        checkuser()
    }, []);

    return (
        <div className={myclass} id="rowofmessage">
            <li className="col-12 col-sm-5">
                <Card>
                    <CardSubtitle tag="h7" className="mb-2 text-muted">{prop.username}:</CardSubtitle>
                    <CardTitle id={myOwnMessage}>{prop.message}</CardTitle>
                </Card>
            </li>
        </div>
    );
}

export default List;