import React from "react";

export default function useToggle() {
    /**
     * 1. Bring the useState and toggle function from 
     * Toggle component into this hook
     */
    const [on, setOn] = React.useState(false)    

    function toggle() {
        setOn(prevOn => !prevOn)
    }

    /**
     * RETURN from this function an array with `on` and `toggle`
     * so that we can import in Toggle and use it:
     * const [on, toggle] = useToggle();
     */
    return [on, toggle]
}