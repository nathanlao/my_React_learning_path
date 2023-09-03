import React from "react";
import { ToggleContext } from "./Toggle"

export default function ToggleDisplay({ children }) { 

    const { on } = React.useContext(ToggleContext);

    // Expect children to be a function that will be rendering JSX
    return children(on)
}