import React from "react"
import Toggle from "../Toggle/index"

export default function Menu({ children, onOpen }) {

    return (
        // Augmented Menu to be a toggle component
        <Toggle onToggle={onOpen}>
            <div className="menu">
                {children}
            </div>
        </Toggle>
    )
}
