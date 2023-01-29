import React, { useState } from "react";
import Die from "./components/Die"
import {nanoid} from "nanoid"

export default function App() {

    // State to hold the array of numbers
    const [dice, setDice] = useState(allNewDice())

    function allNewDice() {
        const newDiceArray = []
        for (let i = 0; i < 10; i++) {
            // random number from 1 - 6
            const randomNumber = Math.floor(Math.random() * 6) + 1

            // push an object to array
            newDiceArray.push({
                id: nanoid(),
                value: randomNumber, 
                isHeld: false
            })
        }
        return newDiceArray
    }

    function handleRoll() {
        setDice(allNewDice())
    }

    // Map over the numbers array -> array of die element with value props
    const diceElements = dice.map((die) => {
        return <Die key={die.id} value={die.value} />
    })

    return (
        <main>
            <div className="dice-container">
               {diceElements}
            </div>
            <button className="roll-btn" onClick={handleRoll}>Roll</button>
        </main>
    )
}