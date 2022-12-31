import React from "react";
import sneakerLogo from "../images/sneaker-logo.png"

export default function Navbar() {
    return (
        <nav>
            <img alt="logo" src={sneakerLogo} />
            <h1>my sneaker collection</h1>
        </nav>
    )
}