import React from "react";
import githubLogo from "../images/GitHub Icon.png"
import twitterLogo from "../images/Twitter Icon.png"
import instagramLogo from "../images/Instagram Icon.png"
import fackbookLogo from "../images/Facebook Icon.png"

export default function Footer() {
    return (
        <footer className="footer">
            <img alt="twitter-logo" src={twitterLogo}/>
            <img alt="github-logo" src={githubLogo}/>
            <img alt="instagram-logo" src={instagramLogo}/>
            <img alt="fackbook-logo" src={fackbookLogo}/>
        </footer>
    )
}