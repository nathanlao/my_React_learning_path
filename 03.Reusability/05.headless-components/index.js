import React from 'react';
import ReactDOM from 'react-dom/client';
import Star from "./Star"
import Toggle from "./Toggle/index"
import { BsStar, BsStarFill } from "react-icons/bs"

function App() {
    return (
        <>
            {/* 1. Setup <Toggle> as parent, use context to 
                provide internal state (logic in <Toggle /> to handle 
                on and off) to children
            */}

            {/* Toggle compound components
                a. Button (flip state)
                b. On (what to display when Toggle state is on)
                c. Off (what to display when Toggle state is off)
                d. Display (expose internal state to give more control to user)
            */}

            <Toggle>
                <Toggle.Button>
                    <Toggle.On>
                        {/* <Star />  Aside: Event bubbling could happen here */}
                        <BsStarFill className="star filled" />
                    </Toggle.On>
                    <Toggle.Off>
                        <BsStar className="star"/>
                    </Toggle.Off>
                </Toggle.Button>
            </Toggle>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
