import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from "./Button";
import { FaApplePay } from "react-icons/fa";


function App() {
    return (
        <main>
        {/* Custom Button component here */}
        {/* Button is the children of main */}
        {/* <Button text="Click here"/> */}

        {/** Make the button accept and display children */}
        <Button>
            <FaApplePay />
            Buy now!
        </Button>
        </main>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);