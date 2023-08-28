import React from 'react';
import { ToggleContext } from './Toggle';

// Now the toggleOn handle the logic of on state

export default function ToggleOn({ children }) {

    const { on } = React.useContext(ToggleContext);

    return (
        on ? children : null
    )
}