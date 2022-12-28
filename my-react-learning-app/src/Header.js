import React from "react"
import marioLogo from "./image/mario-logo.png"

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img className="nav-img" alt="logo" src={marioLogo}/>
                <ul className="nav-items">
                    <li>Blog</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}