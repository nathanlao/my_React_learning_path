import React from "react"
import { BsStar, BsStarFill } from "react-icons/bs"

export default function Star() {
    // Headless component:
    // This is the internal state of Star, in which we probably won't 
    // need it since Toggle can handle the state and functionality
    const [starred, setStarred] = React.useState(false)
    
    function toggle() {
        setStarred(prev => !prev)
    }
    
    return (
        starred ? 
        <BsStarFill className="star filled" onClick={toggle} /> :
        <BsStar className="star " onClick={toggle} />
    )
}