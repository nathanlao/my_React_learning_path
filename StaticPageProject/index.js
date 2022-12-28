// import React from "react"
// import ReactDOM from "react-dom"

// Save JSX elements in variable
const staticPage = (
    <div>
        <img src="./mario-logo.png" width="100px" />
        <h1>My React learning path</h1>
        <h3>My first day learning React xD</h3>
        <ul>
            <li>What is composability?</li>
            <li>Why is React declarative?</li>
            <li>What is JSX?</li>
            <li>How to set up React?</li>
        </ul>
    </div>
)

// console.log(staticPage)

// Render our page
ReactDOM.render(
    staticPage,
    document.getElementById("root")
)