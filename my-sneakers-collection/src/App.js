import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"

export default function App() {
    return (
        <div>
            <Navbar />
            <Card 
                img="airjordon-one.png"
                location="USA"
                link="https://www.flightclub.com/the-10-air-jordan-1-white-black-varsity-red-black-801781"
                title="Air Jordon 1"
                date="December 12"
                desc="The OFF-WHITE x Air Jordan 1 is created by designer Virgil Abloh in the classic Chicago colorway. 
                Some of the half-finished characteristics of the sneaker include an OFF-WHITE zip tie on the collar, a Swoosh linked to the shoe with noticeable blue stitching, 'Air' printed on the midsole. The box is deconstructed as it is turned inward with the inside consisting of a black structure and a gold Jumpman logo, while the outside is plain cardboard with the words 'Jumpman' printed on it."
                />
        </div>
    )
}