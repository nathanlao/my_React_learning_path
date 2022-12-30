import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Card from "./components/Card"
import cardData from "./data"

export default function App() {
    // map data into card components -> return a new array with card components using props
    const cardElements = cardData.map((card) => {
        return <Card 
                // key -> get rid of warning caused by map()
                key={card.id}
                img={card.img}
                title={card.title}
                date={card.date}
                rating={card.rating}
                type={card.type}
                timeLen={card.timeLen}
                hitRate={card.hitRate}
                />
    })

    return (
        <div>
            <Navbar />
            {/* <Hero /> */}
            {/* pass props to Card*/}
            {/* <Card 
                img="deadpool.png"
                title="Deadpool"
                date="February 12"
                rating={7.5}
                type="Action"
                timeLen="1h 48m"
            /> */}
            <section className="cards--list">
                {cardElements}
            </section>
        </div>
    )
}