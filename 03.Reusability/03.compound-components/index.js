import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./Menu/Menu"
import MenuButton from "./Menu/MenuButton"
import MenuDropdown from "./Menu/MenuDropdown"
import MenuItem from "./Menu/MenuItem"

/**
 * Flatten the structure by using compound components:
 * 
 * 1. Have the Menu component to use props.children 
 * 
 * 2. Render MenuButton and MenuDropdown as children of the Menu component
 * 
 * 3. Have the MenuButton to accept props.children and render
 * 
 * 4. Have the MenuDropdown to render children
 * 
 * 5. MenuItem also renders children
 * 
 * 6. As an "user", you now take contol of how you want MenuItem to be rendered.
 * loop over the items in index.js
 */

function App() {

    const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"];
    return (
        <Menu>
            <MenuButton>Sports</MenuButton>
            <MenuDropdown>
                {/* children here:
                    <MenuItem></MenuItem>
                    <MenuItem></MenuItem>
                    <MenuItem></MenuItem>
                    ...
                */}
                {sports.map((sport) => (
                    <MenuItem key={sport}>{sport}</MenuItem>
                ))}
            </MenuDropdown>
        </Menu>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);