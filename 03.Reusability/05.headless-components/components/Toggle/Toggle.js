import React from "react";

const ToggleContext = React.createContext();

/**
 * noop function: 
 * onToggle = () => {}
 * Default it to an empty function if no onToggle() is passed to <Toggle />
 * 
 * Avoid the issue if onToggle is not passed to Toggle component
 * and onToggle is undefined
 *  */ 
export default function Toggle({ children, onToggle = () => {}}) {

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