import React from "react"

// MainContent -> parent component
export default function MainContent() {
    return (
        // Children components
        <main>
            <h1 className="content-title">My first day learning React xD</h1>
            <ul className="content-list">
                <li>What is composability?</li>
                <li>Why is React declarative?</li>
                <li>What is JSX?</li>
                <li>How to set up React?</li>
            </ul>
        </main>
    )
}