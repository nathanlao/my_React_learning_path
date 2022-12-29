import React from "react";

export default function Content() {
    return (
        <main className="content">
            <h1 className="content--name">Nathan Lao</h1>
            <h3 className="content--title">Student at SFU</h3>
            <h4 className="content--website">github.com/nathanlao</h4>
            <button className="content--emailbtn">
                <i className="fas fa-envelope"></i>Email
            </button>
            <button className="content--linkinbtn">
                <i className="fa-brands fa-linkedin"></i>Linkedln
            </button>
            <h1 className="subcontent--title">About</h1>
            <p className="subcontent--description">I am a 3rd year computing science student at SFU. I am now learning
                React. Always look for new things to learn! 
            </p>
            <h1 className="subcontent--title">Interests</h1>
            <p className="subcontent--description">Video Games, Travel, Music</p>
        </main>
    )
}