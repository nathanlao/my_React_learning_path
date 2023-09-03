import React from "react";
/**
 * 1. Always start with `use`, useBlaBlaBla...
 * 
 * 2. 2 params in React.useEffect: callback function and dependency array
 * 
 * 3. Update the useEffectOnUpdate to use hook's parameters
 *    instead of the values from the Toggle component
 */

export default function useEffectOnUpdate(callBackFunction, deps) {
    const firstRender = React.useRef(true)

    React.useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
        } else {
            callBackFunction()
        }
    }, deps)
}