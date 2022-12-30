import React from "react";
import Joke from "./Joke"
import jokesData from "./jokesData";

export default function App() {
    // a list of JSX elements as h3
    // const colors = [<h3>Red</h3>, 
    //             <h3>Orange</h3>, 
    //             <h3>Yellow</h3>,
    //             <h3>Green</h3>,
    //             <h3>Blue</h3>,
    //             <h3>Indigo</h3>,
    //             <h3>Violet</h3>]

    /**
     * Idea: 
     * 1. jokesData contains an array of joke objects
     * 2. map() -> give me a new array
     * 3. array function -> for each joke object inside jokesData, return 
     *    a joke components, with props 
     */
    const jokeElements = jokesData.map((joke) => {
        return <Joke 
                setup={joke.setup}
                punchline={joke.punchline}
                />
    })
    
    return (
        <div>
            
            {jokeElements}

            {/* <Joke 
                setup="I got my daughter a fridge for her birthday."
                punchline="I can't wait to see her face light up when she opens it."
                // pass in non-string props by wrapping with {} --> give us the free reign
                // to throw in any JS
                isPun={false} 
                upvotes={10}
                downvotes={2}
                comments={[{author:"", body:"", title:""}]}
            />
            <Joke 
                setup="How did the hacker escape the police?"
                punchline="He just ransomware!"
                isPun={true}
            />
            <Joke 
                setup="test"
                punchline="test"
                isPun={true}
            /> */}
        </div>
    )
}