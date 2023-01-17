import React from "react";

export default function Meme() {
    return (
        <section>
            <form className="section--form">
                <div className="section--form--input">
                    <input className="section--input" placeholder="Top Text" type="text"/>
                    <input className="section--input" placeholder="Bottom Text" type="text"/>
                </div>
                <button className="section--form--button">Get a new meme image 😛</button>
            </form>
        </section>
    )
}