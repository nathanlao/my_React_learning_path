import React from "react";

export default function Box(props) {
    
    /**
     * Local State (Derived state): when a prop is used to initiate a state.
     * 
     * Each box has its own value of state (receive incoming values of props.on), 
     * giving the ability to each box component to control itself (its on value)
     * 
     * cons: multiple source of truth (state in App, state in Box )
     */ 

    // const [boxState, setBoxState] = React.useState(props.on)
    
    // function toggle() {
    //     setBoxState(prevState => {
    //         return prevState = !prevState
    //     } )
    // }


    const styles = {
        backgroundColor: props.on ? "#222222" : "none"
    }
    return (
        // dynamic styles: style={ {} } 
        // outer {}: put js inside jsx
        // inner {}: represent style as an object
        <div 
            style={ styles } 
            className="box" 
            // Have the functon to run props.handleClick() so that we can pass in specific id
            onClick={ () => props.handleClick(props.id) }>
        </div>
    )
}