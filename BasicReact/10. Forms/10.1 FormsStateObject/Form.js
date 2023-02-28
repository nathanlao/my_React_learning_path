import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {firstName: "", lastName: "", email: ""}
        )
    
    console.log(formData)

    function handleChange(event) {
        // 2. now we have access to event.target.name (key)
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                // ES6 feature: computed properties
                // Turn a dynamic string into a saved variable and use it as a property name
                [event.target.name]: event.target.value
            }
        })
    }


    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                // 1. (key) Make the name property match exactly the same property in state
                name="firstName"
            />
            <input 
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
            />
             <input 
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
            />
        </form>
    )
}
