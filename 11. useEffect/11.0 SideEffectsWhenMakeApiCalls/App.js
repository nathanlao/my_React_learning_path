import React from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    
    console.log("Component rendered")
    
    /**
     * Possible steps:
     * 1. GET the data (using fetch or 3rd party Axios)
     * 2. Save the data to state
     * 
     * Issue: 
     * every time we update the state for data, React re render the component
     * and causing infinite loop
     * 
     *  
     * */ 

    fetch("https://swapi.dev/api/people/1")
        // Resolve the promise get back from fetch -> will receive an response (JSON, and
        // convert it to JS object we can use)
        .then(res => res.json())
        .then(data => setStarWarsData(data))
        
    /** 
     * How to handle side effects in React ?? 
     * 
     * Firstly, React's primary tasks are:
     * 1. Work with DOM/browser to render UI to the page
     * 2. Manage state for us between render cycles (state values are "remembered "
     *    from one render to the next)
     * 3. Keep the UI updated whenever state changes occur
     * 
     * Secondly, React can't handle on its own?
     * 1. side effect:
     *      localstorage
     *      API/db interactions
     *      subscriptions(web sockets)
     *      sync 2 different internal states together
     * 
     * Basically anything that react isn't in charge of -> side effect
     * 
     * Soln: React hook useEffect() -> like a tool that allows us to interect
     *      outside of React ecosystem, allows us to synchronize React state with 
     *      those outside systems (LS, API)
     * */
    
    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}
