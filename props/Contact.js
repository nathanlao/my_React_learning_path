import React from "react";

export default function Contact(properties) {
    return (
        <div className="contact-card">
                <img src={properties.img}/>
                <h3>{properties.name}</h3>
                <div className="info-group">
                    <img src="./images/phone-icon.png" />
                    <p>{properties.phone}</p>
                </div>
                <div className="info-group">
                    <img src="./images/mail-icon.png" />
                    <p>{properties.email}</p>
                </div>
            </div>
    )
}