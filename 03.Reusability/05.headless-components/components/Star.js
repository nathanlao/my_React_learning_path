import React from "react"
import Toggle from "./Toggle/index"
import { BsStar, BsStarFill } from "react-icons/bs"

export default function Star({ onChange }) {
    // Headless component:
    // This is the internal state of Star, in which we probably won't 
    // need it since Toggle can handle the state and functionality
    
    // const [starred, setStarred] = React.useState(false)
    
    // function toggle() {
    //     setStarred(prev => !prev)
    // }
    
    // return (
    //     starred ? 
    //     <BsStarFill className="star filled" onClick={toggle} /> :
    //     <BsStar className="star " onClick={toggle} />
    // )

    return (
        <Toggle onToggle={onChange}>
            <Toggle.Button>
                <Toggle.On>
                    {/* <Star />  Aside: Event bubbling could happen here */}
                    <BsStarFill className="star filled" />
                </Toggle.On>
                <Toggle.Off>
                    <BsStar className="star"/>
                </Toggle.Off>
            </Toggle.Button>
        </Toggle>
    )
}