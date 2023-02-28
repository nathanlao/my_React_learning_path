/**
 * Why react?
 * 1. Composable
 * 2. Declarative: No need to tell the program how should it be done
 */

// ReactDOM.render() to render sth like html to the web page
// render() -> 1st: what to render on screen (HTML code)? 2nd: where to render(HTML element)
// ReactDOM.render(<h1>Hello world from React!</h1>, document.getElementById("root"))

// Create my custom React component
// 1. Concept of composability: Have the MainContent as a single tag,
//                           render it inside ReactDOM.render()
function MainContent() {
    return (
        <h1>I'm learning React!</h1>
    )
}

ReactDOM.render(
    <div>
        <h1 className="header">Hello world!</h1>
        <ul><li>list 1</li><li>list 2</li></ul>
        <MainContent />
    </div>,
    document.getElementById("root")
)

// 2. Imperative: step by step how to create the element, 
//                then to add textCotent, and append to the DOM
// React allows us to do it in a declarative way!!
const h1 = document.createElement("h1")
h1.textContent = "This is an imperative way to program, as opposed to declarative"
h1.className = "header"
document.getElementById("root").append(h1)