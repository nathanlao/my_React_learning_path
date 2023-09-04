import React from "react";
import useEffectOnUpdate from "./useEffectOnUpdate";

export default function useToggle(
    { initialValue = false, 
        onToggle = () => {}
    }) {
    /**
     * 1. Bring the useState and toggle function from 
     * Toggle component into this hook
     */
    const [on, setOn] = React.useState(initialValue)    
    
    function toggle() {
        setOn(prevOn => !prevOn)
    }
    
    useEffectOnUpdate(() => {
        onToggle()
    }, [on])

    /**
     * RETURN from this function an array with `on` and `toggle`
     * so that we can import in Toggle and use it:
     * const [on, toggle] = useToggle();
     */
    return [on, toggle]
}