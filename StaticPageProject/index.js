// import React from "react"
// import ReactDOM from "react-dom"

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
function Header() {
    return (
        <header>
            <nav className="nav">
                <img className="nav-img" src="./mario-logo.png"/>
                <ul className="nav-items">
                    <li>Blog</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer className="footer">
            <small>@ 2022 Lao developement. All rights reserved.</small>
        </footer>
    )
}

// MainContent -> parent component
function MainContent() {
    return (
        // Children components
        <div>
            <h1>My React learning path</h1>
            <h3>My first day learning React xD</h3>
            <ol>
                <li>What is composability?</li>
                <li>Why is React declarative?</li>
                <li>What is JSX?</li>
                <li>How to set up React?</li>
            </ol>
        </div>
    )
}

// CustomPage -> parent component
function CustomPage() {
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
    <CustomPage />,
    document.getElementById("root")
)