import React from 'react';
import ReactDOM from 'react-dom/client';
import Star from "./Star"
import Toggle from "./Toggle"

function App() {
    return (
        <>
            {/* 1. Setup <Toggle> as parent, use context to 
                provide internal state (logic in <Toggle /> to handle 
                on and off) to children
            */}
            <Toggle>
                <Star />
            </Toggle>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
