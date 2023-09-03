import React from "react"

export default function Decision({ sayName, render, children }) {
    const [goingOut, setGoingOut] = React.useState(false)
    
    /** 
     * 1. Whenver state changes, the component re-render, 
     * sayName() will be called, child component is incharge
     * of passing the value (the state: goingOut)
    */
    sayName(goingOut);

    function toggleGoingOut() {
        setGoingOut(prev => !prev)
    }

    return (
        <div>
            <button onClick={toggleGoingOut}>Change mind</button>
            <h1>Am I going out tonight?? {goingOut ? "Yes!" : "Nope..."}</h1>

            {/* 2. */}
            {/* {render(goingOut)} */}

            {/* 3. */}
            {children(goingOut)}
        </div>
    )
}