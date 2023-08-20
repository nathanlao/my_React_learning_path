import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from "./Button";
import { FcGoogle } from "react-icons/fc";


function App() {

    function clickHandler() {
        console.log("Logging in...");
    }

    return (
        <main>
        {/* Custom Button component here */}
        {/* Button is the children of main */}
        {/* <Button text="Click here"/> */}

        {/** Make the button accept and display children */}
        <Button style={{backgroundColor: "green"}} onClick={clickHandler} >
            <FcGoogle />
            Log in with Google
        </Button>
        </main>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);