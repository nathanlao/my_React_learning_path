import React from "react"
import ReactDOM from "react-dom"
// webpack instance -> style loader allows us to import style.css
import "./style.css"
import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"

function App() {
    return (
        <div className="main">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

// Render our page
ReactDOM.render(
    <App />,
    document.getElementById("root")
)