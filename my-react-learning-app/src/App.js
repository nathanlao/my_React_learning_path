import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import MainContent from "./components/MainContent"

export default function App() {

    const [darkMode, setDarkMode] = React.useState(false)

    function toggle() {
        setDarkMode(prevMode => {
            return prevMode = !prevMode
        })
    }

    return (
        <div>
            <Header darkMode={darkMode} toggleDarkMode={toggle}/>
            <MainContent darkMode={darkMode}/>
            <Footer darkMode={darkMode}/>
        </div>
    )
}