import React from "react";
import photoSet from "../images/photo-grid.png"

export default function Hero() {
    return (
        <section className="hero">
            <img alt="photos" src={photoSet} className="hero--photo"/>
            <h1 className="hero--header">Unlimited movies, TV shows, and more.</h1>
            <p className="hero--text">Watch on Smart TVs, Playstation, 
            Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
        </section>
    )
}