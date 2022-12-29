import React from "react";
import netflixLogo from "../images/netflix-logo.png"

export default function Navbar() {
    return (
        <nav>
            <img alt="logo" src={netflixLogo} className="nav--logo"/>
        </nav>
    )
}