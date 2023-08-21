import React from "react";

// pkg to avoid className conflict, join multiple className together
import classnames from "classnames"; 

/**
 * Treat the use of Button here: we are the creater of this custom component
 * Treat the use of Button in index.js: users of this Button component 
 */

export default function Button({children, className, size, variant, ...restProps}) {
    // console.log(restProps);

    /** 
    * 3. Destructing props using {}
    * ...restProps is used to spread the rest props that passed in this
    * Button component -> which is 'style' and 'onClick' from index.js
    * 
    */

    let sizeClass = size ? `button-${size}` : "";

    let variantClass = variant ? `button-${variant}` : "";

    // 4. To avoid conflict in between "className from ...restProps"
    // and the className in native button, otherwise they overwritten the other
    const allClasses = classnames(sizeClass, className, variantClass);
    // console.log(allClasses);

    return (
        // 1. Implicit props (children)
        // React added this to the props object
        // to access to the children (anything in between the custom components tags)

        // <button onClick={props.onClick}>{props.children}</button>

        /**
         * 2. props spreading:
         * props is an object,
         * ...props is to spead the props and pull out amd copy the key-value pairs 
         * from the object,
         * then React is to create each key of the object as the property of the button
         * and also the value of the object 
         * 
         * Ex:
         *  onClick={props.onClick}
            onDoubleClick={props.onDoubleClick}
            style={props.style}
            className={props.className}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}

            But make sure use valid prop that native button accpeting 
            in <Button /> in index.js
         */

        <button className={allClasses} {...restProps}>
            {children}
        </button>
    )
}
