import React from "react";
import Joke from "./Joke"

export default function App() {
    return (
        <div>
            <Joke 
                setup="I got my daughter a fridge for her birthday."
                punchline="I can't wait to see her face light up when she opens it."
            />
            <Joke 
                setup="How did the hacker escape the police?"
                punchline="He just ransomware!"
            />
        </div>
    )
}