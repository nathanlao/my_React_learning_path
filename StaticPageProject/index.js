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
function CustomPage() {
    return (
        <div>
            <header>
                <nav>
                    <img src="./mario-logo.png" width="100px" />
                </nav>
            </header>
        <h1>My React learning path</h1>
        <h3>My first day learning React xD</h3>
        <ol>
            <li>What is composability?</li>
            <li>Why is React declarative?</li>
            <li>What is JSX?</li>
            <li>How to set up React?</li>
        </ol>
        <footer>
            <small>@ 2022 Lao developement. All rights reserved.</small>
        </footer>
    </div>
    )
}

// Render our page
ReactDOM.render(
    <CustomPage />,
    document.getElementById("root")
)