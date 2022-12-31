import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import sneakerData from "./data"

export default function App() {
    const sneakerElement = sneakerData.map((sneaker) => {
        return <Card 
            sneaker={sneaker}/> 
    })

    return (
        <div>
            <Navbar />
            {sneakerElement}
        </div>
    )
}