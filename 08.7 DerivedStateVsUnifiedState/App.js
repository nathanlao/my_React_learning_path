import React from "react"
import Box from "./Box.js"
import boxes from "./boxes"

export default function App(props) {

    //1. Initialize state with the default value of the
    //   array pulled in from boxes.js
    const [squares, setSquares] = React.useState(boxes)


    function toggle(id) {
    
        setSquares(prevSquares => {
            // // Determine what the new square should be
            // const newSquaresArray = []
            // for (let i = 0; i < prevSquares.length; i++) {
            //     const currentSquare = prevSquares[i]
            //     if (currentSquare.id === id) {
            //         // Replace the old object with new one(if id matches)
            //         const updatedSquare = {
            //             // spread all the propertities of current square
            //             ...currentSquare,
            //             on: !currentSquare.on
            //         }
            //         newSquaresArray.push(updatedSquare)
            //     } else {
            //         newSquaresArray.push(currentSquare)
            //     }
            // }
            // return newSquaresArray


            /**
             * More declaretive way: (more concise)
             * use .map() to return a new array without modifying the oringinal array
             */
            return prevSquares.map( (square) => {
                // if id matches, return a new square object with old propertities expect
                // on property, otherwise return the square
                 return square.id === id ? {...square, on: !square.on} : square
            })
        })
    }

    // 2. Map over that state array and display each one
    //    as an empty square (black border, transparent bg color)
    const squaresElement = squares.map((square) => {
        return (
            <Box 
                on={square.on} 
                key={square.id} 
                id={square.id}
                handleClick={toggle} />
        )
    })

    return (
        <main>
            <h1>{squaresElement}</h1>
        </main>
    )
}
