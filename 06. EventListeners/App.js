import React from "react"

export default function App() {
    function handleClick() {
        console.log("clicked")
    }

    function handleHover() {
        console.log("hover")
    }

    return (
        <div className="container">
            <img onMouseOver={handleHover} src="https://picsum.photos/640/360" />
            {/* onClick -> accessing the DOM property of the object that
                is being created  */}

            {/* pass in function without () ->  passing the functon as
                a value so that React can add that function as the event handler */}
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}
