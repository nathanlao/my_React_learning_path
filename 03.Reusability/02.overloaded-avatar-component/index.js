import React from 'react';
import ReactDOM from 'react-dom/client';
import Avatar from "./Avatar"

function App() {
    return (
        <>
            <Avatar src="./images/mario.png" alt="Mario" />
            <br />
            <Avatar bg="green">BZ</Avatar>
            <br />
            <Avatar bg="red"/>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);