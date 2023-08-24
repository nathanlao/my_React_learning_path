import React from "react"
import { MenuContext } from "./Menu"

export default function MenuDropdown({ children }) {

    const isOpen = React.useContext(MenuContext);

    return isOpen ? (
        <div className="menu-dropdown">
            {children}
        </div>
    ) : null
}