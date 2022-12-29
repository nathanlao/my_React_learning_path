import React from "react"
import marioLogo from "../images/mario-logo.png"

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img className="nav-img" alt="logo" src={marioLogo}/>
                <h3 className="nav-title">My React Learning Path</h3>
                <ul className="nav-items">
                    <li>Blog</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}