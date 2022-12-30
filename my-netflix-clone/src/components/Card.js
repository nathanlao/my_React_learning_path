import React from "react";
import star from "../images/star.png"

export default function Card(props) {
    let badgeText
    if (props.hitRate > 30) {
        badgeText = "TOP 10"
    } else if (props.rating > 6) {
        badgeText = "HIGHLY RATED"
    }
    return (
        <div className="card">
            {/* conditional rendering: if 1st statement is truthy
                then 2nd statement (JSX element) will run */}
            {badgeText && <div className="card--badge">{badgeText}</div>}
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