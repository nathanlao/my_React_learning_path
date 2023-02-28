import React from 'react'
import ReactDOM from 'react-dom/client'
// 1. BrowserRouter under the hood is a context provider 
//    that provide context to all its children (Routes component)
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <h1>Hello world!</h1>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    // 2. Wrap the entire App with BrowserRouter to enable client routing
    <BrowserRouter>
        <Routes>

        </Routes>
        <App />
    </BrowserRouter>
)