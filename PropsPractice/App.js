import React from "react";
import Joke from "./Joke"

export default function App() {
    return (
        <div>
            <Joke 
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
            />
        </div>
    )
}