import React from "react";


export default function Button(props) {
    return (
        // Implicit props (children)
        // React added this to the props object
        // to access to the children (anything in between the custom components tags)
        <button onClick={props.onClick}>{props.children}</button>
    )
}
