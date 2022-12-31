import React from "react";
import jordonOne from "../images/airjordon-one.png"
import character from "../images/character.png"

export default function Card() {
    return (
        <div>
            <img alt="jordon" src={jordonOne} />
            <div>
            <img alt="character" src={character} />
                <h3>USA</h3>
            </div>
            <h1>Air Jordon 1</h1>
            <h3>December 12</h3>
            <p>This is intro</p>
        </div>
    )
}