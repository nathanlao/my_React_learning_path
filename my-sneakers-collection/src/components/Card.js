import React from "react";
import jordonOne from "../images/airjordon-one.png"
import character from "../images/character.png"

export default function Card() {
    return (
        <div className="card">
            <div className="card--img-wrapper">
                <img alt="jordon" src={jordonOne} className="card--image"/>
            </div>
            <div className="card--info">
                <p className="card--info--location">
                    <span>
                        <img className="card--info--logo" alt="character" src={character} />
                    </span>
                    USA {" "}
                    <a
                      href="https://www.flightclub.com/the-10-air-jordan-1-white-black-varsity-red-black-801781"
                      className="card--info--link">  
                    View on Flight Club</a>
                </p>
                <h2 className="card--info--title">Air Jordon 1</h2>
                <p className="card--info--date">Release Date: December 12</p>
                <p className="card--info--desc">The OFF-WHITE x Air Jordan 1 is created by designer Virgil Abloh in the classic Chicago colorway. 
                Some of the half-finished characteristics of the sneaker include an OFF-WHITE zip tie on the collar, a Swoosh linked to the shoe with noticeable blue stitching, 'Air' printed on the midsole. The box is deconstructed as it is turned inward with the inside consisting of a black structure and a gold Jumpman logo, while the outside is plain cardboard with the words 'Jumpman' printed on it.</p>
            </div>
        </div>
    )
}