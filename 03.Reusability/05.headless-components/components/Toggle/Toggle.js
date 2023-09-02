import React from "react";

const ToggleContext = React.createContext();

export default function Toggle({ children, onToggle }) {

    const [on, setOn] = React.useState(false);
    
    // Only want to run onToggle() AFTER the first time 
    // rendering the component
    const firstRender = React.useRef(true);

    function toggle() {
        setOn(prevOpen => !prevOpen)
    }

    React.useEffect(() => { 
        if (firstRender.current) {
            firstRender.current = false;
        } else { 
            onToggle();
        }
    }, [on])

    return (
        <ToggleContext.Provider value={{ on, toggle }}>
            {children}
        </ToggleContext.Provider>
    )
}

export { ToggleContext }