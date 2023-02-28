import React from "react"

export default function Form() {
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")

    console.log(firstName, lastName)

    function handleFirstName(event) {
        // event -> syntheticBaseEvent in developer tool
        // console.log(event.target.value)

        // update the firstName state on every keystroke
        setFirstName(event.target.value)
    }

    function handleLastName(event) {
        setLastName(event.target.value)
    }

    return (
        /**
         *  In vanilla JS, we would have a submit button at the end,
         *  and gather all the info together and submit to API or wherever
         * 
         * 
         * In React, need to maintain up-to-date state for every change that happens in
         * any input in form
         */


        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleFirstName}
            />
            <input 
                type="text"
                placeholder="Last Name"
                onChange={handleLastName}
            />
        </form>
    )
}
