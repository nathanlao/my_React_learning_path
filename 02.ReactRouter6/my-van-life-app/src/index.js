import React from 'react'
import ReactDOM from 'react-dom/client'
// 1. BrowserRouter under the hood is a context provider 
//    that provide context to all its children (Routes component)
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
    return (
        // 2. Wrap the entire App with BrowserRouter to 
        //    enable client routing
        <BrowserRouter>
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Routes>
                {/* Path to the route && which react element to render */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}

function Home() {
    return (
        <h1>Hello world!</h1>
    )
}

function About() {
    return (
        <h1>About page!</h1>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
)