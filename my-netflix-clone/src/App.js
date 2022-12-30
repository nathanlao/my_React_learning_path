import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Card from "./components/Card"

export default function App() {
    return (
        <div>
            <Navbar />
            {/* <Hero /> */}
            {/* pass props to Card*/}
            <Card 
                img="deadpool.png"
                title="Deadpool"
                date="February 12"
                rating={7.5}
                type="Action"
                timeLen="1h 48m"
            />
        </div>
    )
}