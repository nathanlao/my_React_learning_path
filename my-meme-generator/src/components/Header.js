import React from "react";
import coolFace from '../images/cool.png'

export default function Header() {
    return (
        <header className="header">
            <img className="header--image" alt="face" src={coolFace} />
            <h2 className="header--title">Meme Generator</h2>
            <h3 className="header--project">Personal Project - Interactive Page</h3>
        </header>
    )
}