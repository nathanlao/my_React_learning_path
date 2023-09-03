import React from "react"
import useEffectOnUpdate from "../../hook/useEffectOnUpdate"

const ToggleContext = React.createContext()

export default function Toggle({ children, onToggle = () => {}}) {
    const [on, setOn] = React.useState(false)    

    function toggle() {
        setOn(prevOn => !prevOn)
    }

    // Use the custom hook to set up the effect again
    useEffectOnUpdate(() => { 
        onToggle() 
    }, [on])

    return (
        <ToggleContext.Provider value={{ on, toggle }}>
            {children}
        </ToggleContext.Provider>
    )
}

export { ToggleContext }