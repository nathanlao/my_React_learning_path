import React from "react";
import picture from "../images/portfolio.png"

export default function Header() {
    return (
        <header>
            <nav>
                <img alt="logo" src={picture} className="nav-pic"/>
            </nav>
        </header>
    )
}