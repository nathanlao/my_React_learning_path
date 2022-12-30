import React from "react";
import poster from "../images/deadpool.png"
import star from "../images/star.png"

export default function Card() {
    return (
        <div className="card">
            <img alt="poster" src={poster} className="card--image" />
            <p><span className="bold">Deadpool</span> February 12</p>
            <div className="card--stats">
                <img alt="star" src={star} className="card--star"/>
                <span className="gray">2016 • </span>
                <span className="gray">Action • </span>
                <span className="gray">1h 48m</span>
            </div>
        </div>
    )
}