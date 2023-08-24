import React from "react"
import { ThemeContext } from "./App"

export default function Header() {
    // Provide the correct context to React.useContext()
    // and destructure the theme property from the obj in the context provider
    const { theme } = React.useContext(ThemeContext)

    return (
        <header className={`${theme}-theme`}>
            <h1>{theme === 'light' ? 'Light' : 'Dark'} Theme</h1>
        </header>
    )
}