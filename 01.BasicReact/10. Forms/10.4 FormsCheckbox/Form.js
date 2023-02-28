import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            comments: "",
            mycheck: true,
        }
    )
    
    console.log(formData.comments)
    
    function handleChange(event) {
        // destructure event.target and pull out name and value and type
        const {name, value, type, checked} = event.target

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
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
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea 
                value={formData.comments}
                placeholder="Comments"
                onChange={handleChange}
                name="comments"
            />

            <input 
                type="checkbox"
                id="mycheck"
                // assiciate the checkbox with state, use checked={boolean}
                // controlled component
                checked={formData.mycheck}
                onChange={handleChange}
                name="mycheck"
            />
            <label htmlFor="mycheck">Is this your checkbox?</label>
        </form>
    )
}
