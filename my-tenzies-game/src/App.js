import React, { useState, useEffect } from "react";
import Die from "./components/Die"
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'

export default function App() {

    // State to hold the array of numbers
    const [dice, setDice] = useState(allNewDice())

    // State to keep track of won game
    const [tenzies, setTenzies] = useState(false)

    // Add a side effect
    useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)

        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)

        if (allHeld && allSameValue) {
            setTenzies(true)
            console.log("won")
        }
    }, [dice])

    // Helper function
    function generateNewDie() {
        // random number from 1 - 6
        const randomNumber = Math.floor(Math.random() * 6) + 1
        return {
            id: nanoid(),
            value: randomNumber, 
            isHeld: false
        }
  }

    function allNewDice() {
        const newDiceArray = []
        for (let i = 0; i < 10; i++) {
            // push an object to array
            newDiceArray.push(generateNewDie())
        }
        return newDiceArray
    }

    function handleRoll() {
        setDice(prevDice => prevDice.map((die) => {
            return die.isHeld ? die : generateNewDie()
        }))
    }

    function holdDice(id) {
        setDice(prevDice => prevDice.map(die => {
            return die.id === id ? 
                {...die, isHeld: !die.isHeld} : 
                die
        }))
    }

    // Map over the numbers array -> array of die element with props
    const diceElements = dice.map((die) => {
        return <Die 
                    key={die.id} 
                    value={die.value} 
                    isHeld={die.isHeld} 
                    handleHoldDice={() => holdDice(die.id)}
                />
    })

    return (
        <main>
            {tenzies && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. 
            Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button 
                className="roll-btn" 
                onClick={handleRoll}
            >
                {tenzies ? "New Game" : "Roll"}
            </button>
        </main>
    )
}