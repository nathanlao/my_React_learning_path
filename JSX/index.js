/**
 * JSX: JavaScript XML (a flavor of JS that looks like HTML)
 *      makes React declarative
 * Pros: Allow us to write HTML elements in JavaScript and put in in the DOM
 *       without any createElement() methods
 */

// can save a collection of jsx into a variable
const page = (
    <div>
        <h1 className="header">This is JSX!</h1>
        <p>This is paragraph</p>
    </div>
)

ReactDom.render(
    // With JSX, make sure we are only retuning only single parent element
    // Can not render two sibling elements that sit side by side
    // need to wrap them instead, ex. in a div, render just one parent element

    // <div>
    //     <h1 className="header">This is JSX!</h1>
    //     <p>This is paragraph</p>
    // </div>,
    page,
    document.getElementById("root")
)

// challenge: Create a navbar in jsx
// set up jsx for navbar
const navbar = (
    <nav>
        <h1>My react learning path</h1>
        <ul>
            <li>Day1</li>
            <li>Day2</li>
            <li>Day3</li>
        </ul>
    </nav>
)

ReactDom.render(
    navbar,
    document.getElementById("root")
)