import React from "react";
import Navbar from '../Navbar';
import Background from '../Background';
import "./style.css";

function Header() {
    return (
        <header className="header">
            <Background />
            <Navbar />
        </header>
    );
}

export default Header;
