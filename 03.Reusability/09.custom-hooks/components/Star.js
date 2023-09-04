import React from "react"
import Toggle from "./Toggle/index"
import { BsStar, BsStarFill } from "react-icons/bs"
import useToggle from "../hook/useToggle"

export default function Star({ onChange }) {
    // use the useToggle hook to conditionally render the stars
    const [on, toggle] = useToggle();

    return (
        
        on ? <BsStarFill onClick={toggle} className="star filled" />
            : <BsStar onClick={toggle} className="star" />


        // <Toggle onToggle={onChange}>
        //     <Toggle.Button>
        //         <Toggle.On>
        //             <BsStarFill className="star filled" />
        //         </Toggle.On>
        //         <Toggle.Off>
        //             <BsStar className="star" />
        //         </Toggle.Off>
        //     </Toggle.Button>
        // </Toggle>
    )
}