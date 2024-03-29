import React from "react"
import MenuButton from "./MenuButton"
import MenuDropdown from "./MenuDropdown"

// MenuContext instance
const MenuContext = React.createContext();

export default function Menu({ children }) {
    const [open, setOpen] = React.useState(false);
    
    function toggleMenu() {
        setOpen(prevOpen => !prevOpen);
    }

    return (
        <MenuContext.Provider value={{open, toggleMenu}}>
            <div className="menu">
                {children}
            </div>
        </MenuContext.Provider>
    )
}

export { MenuContext }
