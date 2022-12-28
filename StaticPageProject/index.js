import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"

// // Save JSX elements in variable
// const staticPage = (
//     <div>
//         <img src="./mario-logo.png" width="100px" />
//         <h1>My React learning path</h1>
//         <h3>My first day learning React xD</h3>
//         <ul>
//             <li>What is composability?</li>
//             <li>Why is React declarative?</li>
//             <li>What is JSX?</li>
//             <li>How to set up React?</li>
//         </ul>
//     </div>
// )

// console.log(staticPage)

// Create our custom component that returns react element
// 1. Use pascal case for our component name!
// 2. Wrap the component with < /> in render()
// Example: 
// function Footer() {
//     return (
//         <footer className="footer">
//             <small>@ 2022 Lao developement. All rights reserved.</small>
//         </footer>
//     )
// }

// CustomPage -> parent component
function App() {
    return (
        <div className="main">
            {/* Create an instance of header/MainContent/Footer component */}
            {/* Composing our page of other components */}
            {/* Children components */}
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