import React from "react"
import Header from "./Header"
import Button from "./Button"

// 1. Create a new context instance using React.createContext()
const ThemeContext = React.createContext();

export default function App() {
    return (
        // 2. Use the ThemeContext to wrap the components with a Provider
        // 3. Pass a prop (value) to the Provider, this value (string, obj...)
        //    will be accessible to every components we have inside the Provider
        <ThemeContext.Provider value="light">
            <div className="container dark-theme">
                <Header />
                <Button />
            </div>
        </ThemeContext.Provider>
    )
}

// 4. export the context so that we can import it in other components
export { ThemeContext }