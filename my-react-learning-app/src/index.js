import React from "react"
import ReactDOM from "react-dom"
// webpack instance -> style loader allows us to import style.css
import "./style.css"
import App from "./App"

// Render our page
ReactDOM.render(
    <App />,
    document.getElementById("root")
)