
import React from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)
    
    
    // useEffect(): 1 required param (callback func) and 1 optional param (dependency array)
    React.useEffect(function() {
        // side effects code (reaching outside react ecosystem):
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
        // dependency array: contain values that if they change from one render to next
        //                   will cause this effect to run (limit the times that this effect
        //                   will run or when to run instead of running after every single render)
        // empty array: not looking for any changes between one render and the next
    }, [count])

    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Get next Character</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}
