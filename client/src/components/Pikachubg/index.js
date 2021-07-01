import React from "react";
import Pikachubg from './AshPikachu.gif'
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Pikachu() {
    return (
        <div className="col-6 col-sm-5">
            <img className="rounded float-right" id="pika" src={Pikachubg} alt="pikachu" />
        </div>
    );
}

export default Pikachu;
