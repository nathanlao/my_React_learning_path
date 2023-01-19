import React from "react";
import ReactDOM from 'react-dom';

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

    // Ternary operator
    let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"
    
    function toggleFavorite() {
        // updating state object and return a new updated object
        setContact(prevContact => {
            return {
                // make sure to spread in all old propertities of old object
                ...prevContact,
                isFavorite: !prevContact.isFavorite // overwrite the old property
            }
        }) 
    }

    /**
     * 
     * using the properties of our state object above for markup
     * 
     */
    
    return (
        <main>
            <article className="card">
                <img src="./images/user.png" className="card--image" />
                <div className="card--info">
                    <img 
                        src={`../images/${starIcon}`} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        {/* reference the contact and use . to access its propertities*/}
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));