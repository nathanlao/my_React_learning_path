import React from "react"

export default function MenuDropdown({ children, open }) {
    // MenuDropdown is receiving `open` state and `toggleMenu` function from Menu.js
    return (
        open && 
        (
            <div className="menu-dropdown">
                {children}
                
            {/* Remember <MenuItem/> is not a direct child of <Menu />:
            if you want <MenuItem/> access to state/function, you need 
            React.Children in <MenuDropdown/>, which is one of the limitation
            of React.Children API
            */}

                {/* {React.Children.map(children, (child) => {
                    return React.cloneElement(child, {
                        open,
                        toggle,
                    })
                })} */}
            </div>
        )
    )
}