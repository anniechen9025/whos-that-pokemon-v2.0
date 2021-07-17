import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { useEffect, useState } from "react";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function List(prop) {
    const [myOwnMessage, setMyOwn]= useState();

    function checkuser() {
        if(prop.username == prop.user){
        setMyOwn("mine")
    }else{
        setMyOwn("others")
    }}
    

    useEffect(() => {
        checkuser()
    }, []);

    return (
        <li className="col-12 col-sm-6" id={myOwnMessage}>
            <Card>
                <CardSubtitle tag="h7" className="mb-2 text-muted">{prop.username}:</CardSubtitle>
                <CardTitle >{prop.message}</CardTitle>
                
            </Card>
        </li>
    );
}

export default List;