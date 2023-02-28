import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {

    const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"])
    
    function addItem() {
        setThingsArray((prevThingsArray) => {
            // ES6 spread operator: spread in existing array
            // can not do preThingsArray.push() -> this is modifying original state
            return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
        })
    }
    
    const thingsElements = thingsArray.map(function(thing) {
        return <p key={thing}>{thing}</p>
    })
    
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));