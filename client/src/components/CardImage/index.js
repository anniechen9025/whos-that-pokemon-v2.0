import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';


function ChatImage(prop) {
    console.log(prop);
    return (
        <CardImg id= "pokemon_image" top width="100%" src={`image/${prop.imagenumber}.png`} alt="Card image cap" />
    );
}

export default ChatImage;
