import React from "react"
import { ThemeContext } from "./App"

export default function Header() {
    // Provide the correct context to React.useContext()
    const value = React.useContext(ThemeContext)

    return (
        <header className={`${value}-theme`}>
            <h1>{value === 'light' ? 'Light' : 'Dark'} Theme</h1>
        </header>
    )
}