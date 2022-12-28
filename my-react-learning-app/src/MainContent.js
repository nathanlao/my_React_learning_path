import React from "react"

// MainContent -> parent component
export default function MainContent() {
    return (
        // Children components
        <div>
            <h1>My React learning path</h1>
            <h3 className="content-subheader">My first day learning React xD</h3>
            <ol className="content-list">
                <li>What is composability?</li>
                <li>Why is React declarative?</li>
                <li>What is JSX?</li>
                <li>How to set up React?</li>
            </ol>
        </div>
    )
}