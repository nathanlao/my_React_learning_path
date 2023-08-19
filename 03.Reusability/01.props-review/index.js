import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from "./Button";


function App() {
    return (
        <main>
        {/* Custom Button component here */}
            <Button text="Click here"/>
        </main>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);