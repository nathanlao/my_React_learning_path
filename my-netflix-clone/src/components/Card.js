import React from "react";
import star from "../images/star.png"

export default function Card(props) {
    // console.log(props)
    let badgeText
    if (props.card.hitRate > 30) {
        badgeText = "TOP 10"
    } else if (props.card.rating > 6) {
        badgeText = "HIGHLY RATED"
    }

    return (
        <div className="card">
            {/* conditional rendering: if 1st statement is truthy
                then 2nd statement (JSX element) will run */}
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img alt="poster" src={require(`../images/${props.card.img}`)} className="card--image" />
            <p className="card--title"><span className="bold--title">{props.card.title}</span> {props.card.date}</p>
            <div className="card--stats">
                <img alt="star" src={star} className="card--star"/>
                <span className="card--rating">{props.card.rating}</span>
                <span className="card--type">{props.card.type} • </span>
                <span className="gray">{props.card.timeLen}</span>
            </div>
        </div>
    )
}