import React from "react";

const ToggleContext = React.createContext();

export default function Toggle({ children, onToggle }) {

    const [on, setOn] = React.useState(false);

    function toggle() {
        setOn(prevOpen => !prevOpen)
    }

    React.useEffect(() => { 
        onToggle();
    }, [on])

    return (
        <ToggleContext.Provider value={{ on, toggle }}>
            {children}
        </ToggleContext.Provider>
    )
}

export { ToggleContext }