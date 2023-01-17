import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    /**
     * Map over the thingsArray to generate
     * a <p> element for each item and render them on the page
     * 
     * Issue: new things we add on to the array will not be rerendered
     * sort of cementing (thingsElement) into memory, no matter what to change 
     * (thingsArray), its not going to change (thingsElement)
     * 
     * This is why we call React library is declarative:
     * What we actually need to do is to update the data and react will automatically
     * react to those changes and update our UI
     * 
     * Here we need to access the React state and state will allow us to hook into
     * the component, whenever we update the values, React will update the UI based on
     * the changes
     */

    const thingsArray = ["Thing 1", "Thing 2"]

    const thingsElement = thingsArray.map(thing => {
        return <p key={thing}>thing</p>
    })

    function addThing() {
        const newThing = `Thing ${thingsArray.length + 1}`
        thingsArray.push(newThing)
        console.log(thingsArray)
    }
    
    return (
        <div>
            <button onClick={addThing}>Add Item</button>
            {/* Insert the things here*/}
            {thingsElement}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));