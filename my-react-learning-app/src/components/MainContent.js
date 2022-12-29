import React from "react"

// MainContent -> parent component
export default function MainContent() {
    return (
        // Children components
        <main>
            <h1 className="content-title">My first day learning React xD</h1>
            <ul className="content-list">
                <li>What is composability?</li>
                <span>The ability to have the components as a single tag, several React components can be combined to 
                    produce another React component, then render it inside ReactDOM.render().</span>
                <li>Why is React declarative?</li>
                <span>No need to tell the program step by step how should it be done.</span>
                <li>What is JSX?</li>
                <span>JavaScript XML (a flavor of JS that looks like HTML)
                    makes React declarative. It allow us to write HTML elements in JS and put it in the DOM
                    without any createElement() methods.</span>
                <li>How to set up React?</li>
                <span>For jsx syntax to work, we need to import the following:</span>
                <br />
                <ol className="content_nested">
                    <li>import React from "react"</li>
                    <li>import ReactDOM from "react-dom"</li>
                </ol>
            </ul>
        </main>
    )
}