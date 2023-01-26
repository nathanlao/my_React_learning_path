import React from "react"
import marioLogo from "../images/mario-logo.png"

export default function Header(props) {
    return (
        <nav className={props.darkMode ? "dark": ""}>
            <img className="nav-img" alt="logo" src={marioLogo}/>
            <h3 className="nav-title">My React Learning Path</h3>
            <ul className="nav-items">
                <li>Blog</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <div className="toggler" >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}