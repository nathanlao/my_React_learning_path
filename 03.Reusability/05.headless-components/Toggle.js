import React from "react";

export default function Toggle({ children }) {

    const [on, setOn] = React.useState(false);

    function toggle() {
        setOn(prevOpen => !prevOpen)
    }

    return (
        <>
            {children}
        </>
    )
}