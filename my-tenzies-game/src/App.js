import React, { useState } from "react";
import Die from "./components/Die"

export default function App() {

    function allNewDice() {
        const newDiceArray = []
        for (let i = 0; i < 10; i++) {
            // random number from 1 - 6
            const randomNumber = Math.floor(Math.random() * 6) + 1
            newDiceArray.push(randomNumber)
        }
        return newDiceArray
    }

    // State to hold the array of numbers
    const [numbers, setNumbers] = useState(allNewDice())

    // Map over the numbers array -> array of die element with value props
    const diceElements = numbers.map((number, index) => {
        return <Die key={index} value={number} />
    })

    return (
        <main>
            <div className="dice-container">
               {diceElements}
            </div>
        </main>
    )
}