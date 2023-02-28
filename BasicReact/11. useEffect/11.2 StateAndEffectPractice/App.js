import React from "react"
import WindowTracker from "./WindowTracker"

export default function App() {

    const [show, setShow] = React.useState(true)

    function handleShow() {
        setShow(prevShow => {
            return prevShow = !prevShow
        })
    }
    
    return (
        <div className="container">
            <button onClick={handleShow}>
                Toggle WindowTracker
            </button>
            {show && <WindowTracker />}
        </div>
    )
}
