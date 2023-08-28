import React from "react";
import { ToggleContext } from "./Toggle"

// Now the toggleOff handle the logic of off state
export default function ToggleOff({ children }) {

    const { on } = React.useContext(ToggleContext);

    return (
        on ? null : children
    )
}