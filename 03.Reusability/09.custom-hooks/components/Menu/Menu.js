import React from "react"
import useToggle from "../../hook/useToggle"

const MenuContext = React.createContext();

export default function Menu({ children, onOpen }) {
    /**
     * 1. Remove all references to Toggle
     * 2. Use `useToggle()` to create new state and toggle function
     * 3. Set up context provider for Menu so that its children can use
     * 4. Bring in MenuContext for children and useContext
     * 5. Great! We don't really need Toggle component any more! Thanks for
     *    useToggle() custom hook!
     */
    const [open, toggleOpen] = useToggle({
        initialValue: true, 
        onToggle: onOpen
    });

    return (
        <MenuContext.Provider value={{open, toggleOpen}}>
            <div className="menu">
                {children}
            </div>
        </MenuContext.Provider>
    )
}

export { MenuContext } 
