import React from "react"
import { ThemeContext } from './App'

export default function Button() {
    // Provide the correct context to React.useContext()
    const value = React.useContext(ThemeContext);

    return (
        <button className={`${value}-theme`}>
            Switch Theme
        </button>
    )
}