import React from "react";
import star from "../images/star.png"

export default function Card(props) {
    return (
        <div className="card">
            <img alt="poster" src={require(`../images/${props.img}`)} className="card--image" />
            <p className="card--title"><span className="bold--title">{props.title}</span> {props.date}</p>
            <div className="card--stats">
                <img alt="star" src={star} className="card--star"/>
                <span className="card--rating">{props.rating}</span>
                <span className="card--type">{props.type} • </span>
                <span className="gray">{props.timeLen}</span>
            </div>
        </div>
    )
}