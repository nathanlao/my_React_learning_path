import React from "react"

export default function MenuDropdown({ children, open }) {
    // MenuDropdown is receiving `open` state and `toggleMenu` function from Menu.js
    return (
        open && 
        (
            <div className="menu-dropdown">
                {children}
            </div>
        )
    )
}