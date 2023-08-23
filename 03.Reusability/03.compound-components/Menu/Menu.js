import React from "react"
import MenuButton from "./MenuButton"
import MenuDropdown from "./MenuDropdown"

export default function Menu({ children }) {
    const [open, setOpen] = React.useState(true);
    
    function toggleMenu() {
        setOpen(prevOpen => !prevOpen);
    }

    return (
        <div className="menu">
            {/* 1. render the props.children inside: 
            props.children is an array here contains
            <MenuButton/> and <MenuDropdown/>*/}
            {/* {children} */}

            {/* Using React.Children to handle implicit state:
                React.Children.map() over each direct children <MenuButton/> and <MenuDropdown/>
                callback function to return a new array with each child being augmented (new props)
            */}
            
            {React.Children.map(children, (child) => { 
                // React.cloneElement to make a copy of <MenuButton/> and <MenuDropdown/>
                // and 2nd param is an object that contains the new props we want to pass to children
                return React.cloneElement(child, {
                    open: open,
                    toggleMenu: toggleMenu
                })
            })}
        </div>
    )
}
