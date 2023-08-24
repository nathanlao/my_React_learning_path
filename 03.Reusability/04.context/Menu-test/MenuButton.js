import React from "react"
import Button from "../Button/Button"
import { MenuContext } from "./Menu" 

export default function MenuButton({ children }) {

    const { toggleMenu } = React.useContext(MenuContext);

    return (
        <Button onClick={toggleMenu}>{children}</Button>
    )
}