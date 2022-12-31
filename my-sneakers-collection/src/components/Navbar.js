import React from "react";
import sneakerLogo from "../images/sneaker-logo.png"

export default function Navbar() {
    return (
        <nav className="nav">
            <img alt="logo" src={sneakerLogo} className="nav--logo" />
            <h1 className="nav--title">Sneaker Collection Gallery</h1>
        </nav>
    )
}