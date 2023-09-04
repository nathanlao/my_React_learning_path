import React from "react"
import useEffectOnUpdate from "../../hook/useEffectOnUpdate"
import useToggle from "../../hook/useToggle"

const ToggleContext = React.createContext()

export default function Toggle({ children, onToggle = () => {}}) {
    const [on, toggle] = useToggle();    

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