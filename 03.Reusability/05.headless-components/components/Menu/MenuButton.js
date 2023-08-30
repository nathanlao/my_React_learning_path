import React from "react"
import Button from "../Button/Button"
import Toggle from "../Toggle/index"

export default function MenuButton({ children }) {
    return (
        // Now the <Button /> will also have access to flipping the logic
        // in the toggle context provides by <Menu />
        <Toggle.Button>
            <Button>
                {children}
            </Button>
        </Toggle.Button>
    )
}