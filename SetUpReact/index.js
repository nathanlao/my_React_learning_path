// For jsx to work, need to import React
// import React from "react"
// import ReactDOM from "react-dom"

const page = (
    <div>
        <h1>My first react</h1>
        <h3>Reasons I love react</h3>
        <ol>
            <li>It is composable</li>
            <li>It is declarative</li>
            <li>Good skill</li>
            <li>Actively maintained by skilled people</li>
        </ol>
    </div>
)

ReactDOM.render(
    page,
    document.getElementById("root")
)