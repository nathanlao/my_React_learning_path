import React from "react"

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img className="nav-img" src="./mario-logo.png"/>
                <ul className="nav-items">
                    <li>Blog</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}