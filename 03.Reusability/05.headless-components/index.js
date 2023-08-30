import React from 'react';
import ReactDOM from 'react-dom/client';
import Star from "./components/Star"
import Menu from "./components/Menu/index"

import { BsStar, BsStarFill } from "react-icons/bs"

function App() {

    const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"];

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

            {/* <Toggle>
                <Toggle.Button>
                    <Toggle.On> */}
                        {/* <Star />  Aside: Event bubbling could happen here */}
                        {/* <BsStarFill className="star filled" />
                    </Toggle.On>
                    <Toggle.Off>
                        <BsStar className="star"/>
                    </Toggle.Off>
                </Toggle.Button>
            </Toggle> */}

            {/* 2. In this example: Menu components are refractored
            to use the logic from Toggle instead of doing any logic 
            of its own. */}

            {/* <Toggle>
                <Menu>
                    <Toggle.Button>
                        <Menu.Button>Sports</Menu.Button>
                    </Toggle.Button>
                    <Toggle.On>
                        <Menu.Dropdown>
                            {sports.map((sport) => (
                                <Menu.Item key={sport}>{sport}</Menu.Item>
                            ))}
                        </Menu.Dropdown>
                    </Toggle.On>
                </Menu>
            </Toggle> */}


            {/* 3. Compose the elements with Toggle */}

            <Star />

            <Menu>
                <Menu.Button>Sports</Menu.Button>
                <Menu.Dropdown>
                    {sports.map((sport) => (
                        <Menu.Item key={sport}>{sport}</Menu.Item>
                    ))}
                </Menu.Dropdown>
            </Menu>

        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
