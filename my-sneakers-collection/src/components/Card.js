import React from "react";
import jordonOne from "../images/airjordon-one.png"
import character from "../images/character.png"

export default function Card(props) {
    return (
        <div className="card">
            <div className="card--img-wrapper">
                <img alt="jordon" src={require(`../images/${props.img}`)} className="card--image"/>
            </div>
            <div className="card--info">
                <p className="card--info--location">
                    <span>
                        <img className="card--info--logo" alt="character" src={character} />
                    </span>
                    {props.brand} {" "}
                    <a href={props.link} className="card--info--link">  
                    View on Flight Club</a>
                </p>
                <h2 className="card--info--title">{props.title}</h2>
                <p className="card--info--date">Release Date: {props.date}</p>
                <p className="card--info--desc">{props.desc}</p>
            </div>
        </div>
    )
}