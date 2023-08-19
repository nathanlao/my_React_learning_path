import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from "./Button";


function App() {
    return (
        <main>
        {/* Custom Button component here */}
        {/* Button is the children of main */}
        {/* <Button text="Click here"/> */}

        {/** Make the button accept and display children */}
        <Button>Buy now!</Button>
        </main>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);