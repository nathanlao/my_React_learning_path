import React from "react"
import Toggle from "../Toggle/index"

export default function Menu({ children }) {

    return (
        // Augmented Menu to be a toggle component
        <Toggle>
            <div className="menu">
                {children}
            </div>
        </Toggle>
    )
}
