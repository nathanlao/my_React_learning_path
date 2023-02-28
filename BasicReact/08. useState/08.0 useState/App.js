import React from "react"

export default function App() {
    // useState is one of many what we called hooks in React
    // useState is part of React library -> React.useState()
    // useState() -> return an array

    // "Yes" is the default value for the state that saved
    // [] -> array destructuring, destructuring the array that return by useState,
    // and store the result (1st param) into var called result, also the f() into 
    // var called setResult
    const [result, setResult] = React.useState("Yes")
    console.log(result) // just the array: ["Yes", ƒ()]

    function handleClick() {

        // a function return by useState(), 
        // new value we provided is going to be the new state
        setResult("No")
    }

    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div onClick={handleClick} className="state--value">
                <h1>{result}</h1>
            </div>
        </div>
    )
}
