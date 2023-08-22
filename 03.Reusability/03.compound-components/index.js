import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./Menu/Menu"
import MenuButton from "./Menu/MenuButton"
import MenuDropdown from "./Menu/MenuDropdown"

/**
 * 1. Have the Menu component to use props.children 
 * 
 * 2. Render MenuButton and MenuDropdown as children of the Menu component
 */

function App() {
    return (
        <Menu>
            <MenuButton 
                buttonText="Sports"
            />
            <MenuDropdown 
                items={["Tennis", "Pickleball", "Racquetball", "Squash"]}
            />
        </Menu>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);