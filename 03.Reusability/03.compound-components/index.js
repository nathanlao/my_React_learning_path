import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./Menu/Menu"
import MenuButton from "./Menu/MenuButton"
import MenuDropdown from "./Menu/MenuDropdown"

/**
 * 1. Have the Menu component to use props.children 
 * 
 * 2. Render MenuButton and MenuDropdown as children of the Menu component
 * 
 * 3. Have the MenuButton to accept props.children and render
 */

function App() {
    return (
        <Menu>
            <MenuButton>Sports</MenuButton>
            <MenuDropdown 
                items={["Tennis", "Pickleball", "Racquetball", "Squash"]}
            />
        </Menu>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);