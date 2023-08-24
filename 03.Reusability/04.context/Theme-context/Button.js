import React from "react"
import { ThemeContext } from './App'

export default function Button() {
    // Provide the correct context to React.useContext()
    // and destructure the properties from the obj in the context provider
    const { theme, toggleTheme } = React.useContext(ThemeContext);

    return (
        <button onClick={toggleTheme} className={`${theme}-theme`}>
            Switch Theme
        </button>
    )
}