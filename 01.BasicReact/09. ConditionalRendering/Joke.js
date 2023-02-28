import React from "react"

export default function Joke(props) {
    /**
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */
    const [isShown, setIsShown] = React.useState(false)

    function toggle() {
        setIsShown(prevShown => {
            return prevShown = !prevShown
        })
    }

    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {/* Conditional rendering:
                wrap with {}: allow to put JS expression. 
                Only display the paragraph if `isShown` is true */}
            {isShown && <p>{props.punchline}</p>}

            {/* Ternary operator */}
            <button onClick={toggle}>{isShown ? "Hide" : "Show"} line</button>
            <hr />
        </div>
    )
} 