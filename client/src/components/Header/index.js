import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from '../Navbar';
import "./style.css";

function Header() {
    return (
        <header className="header">
            <Router>
                <Navbar />
            </Router>

        </header>
    );
}

export default Header;
