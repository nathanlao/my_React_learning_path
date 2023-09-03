import React from "react"
import Decision from "./Decision"

function App() {

    return (
        /**
         * Pass a function down via props to <Decision /> that receives
         * the boolean in state
         * 
         * 1. Concept:
         * Get access to the state (goingOut) that lives in child compoent,
         * but use it from the parent component
         */
        <>
            {/* <div>
                <Decision sayName={(bool) => {
                    console.log(bool ? "I AM going out" : "I'm staying in")
                }} />
            </div> */}

            
            {/* 
                2. Pass a function via props that return JSX,
                and now we can call the function in <Decision />
                and display it

                Render props
                
                <Decision /> gives the internal state, and its delegating
                to us to decide what should render based on the internal
                state
            */}

            {/* <div>
                <Decision render={(stateInDecision) => {
                    return (
                        <h1>
                            Am I going out tonight?? {stateInDecision ? 
                            "Yes!" : "Nope..."}
                        </h1>
                    )
                }} />
            </div> */}

            {/* 3. children (function) as render props */}
            <Decision>
                {(goingOut) => {
                    return (
                        <h1>
                            Am I going out tonight?? {goingOut ?
                                "Yes!" : "Nope..."}
                        </h1>
                    )
                }}
            </Decision>
        </>
    )
}

export default App