import React from "react"

export default function App() {
    /**
     *  Set up state to track our count (initial value is 0)
     */
    const [count, setCount] = React.useState(0)

    /**
     * A function called `add` that runs
     * when the + button is clicked.
     */

    function add() {
        // setCount(count + 1)
        
        // pass in a callback function to setter function would be a better soln
        // setCount(function() {
        //     return count + 1
        // })

        // ES6 
        setCount(prevCount => prevCount + 1)
    }

    function minus() {
        setCount(prevCount => prevCount - 1)
    }

    return (
        <div className="counter">
            <button onClick={minus} className="counter--minus">–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button onClick={add} className="counter--plus">+</button>
        </div>
    )
}
