import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {firstName: "", lastName: "", email: ""}
        )
    
    console.log(formData)

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
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
                name="firstName"
                /**
                 *  Making the React state be the “single source of truth”
                 * 
                    React component that renders a form also controls what 
                    happens in that form on subsequent user input. 
                    An input form element whose value is controlled by React 
                    in this way is called a “controlled component”.

                    Conceptually, the value of the input box is no longer
                    being controlled by the input but rather by React state
                 */
                value={FormData.firstName}
            />
            <input 
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={FormData.lastName}
            />
             <input 
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={FormData.email}
            />
        </form>
    )
}
