import React from "react"
import Button from "../Button/Button"

export default function MenuButton({ children, toggleMenu }) {
    // MenuButton is receiving `open` state and `toggleMenu` function from Menu.js
    return (
        <Button onClick={toggleMenu}>{children}</Button>
    )
}