import React from "react"
import Count from "./Count.js"

export default function App() {
    const [count, setCount] = React.useState(0)
    
    function add() {
        setCount(prevCount => prevCount + 1)
    }
    
    function subtract() {
        setCount(prevCount => prevCount - 1)
    }

    /**
     * Every time we change the state, its re-rendering the component 
     * in which the state is declared
     */
    console.log("App component rendered")
    
    /**
     * - Create a new component Count
     *    - It receives a prop called `number`, whose value
     *      is the current value of our count
     *    - Have the component render the whole div.counter--count
     *      and display the incoming prop `number`
     */
    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            {/* Child component receives a state value via props  */}
            <Count number={count} />
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}
