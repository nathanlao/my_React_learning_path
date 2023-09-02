import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
    const [text, setText] = React.useState("")
    const [list, setList] = React.useState([])

    // 1. create a ref for input state
    const inputRef = React.useRef(null)

    function handleChange(e) {
        setText(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (!text) {
        return;
        }
        setList(prevList => [...prevList, text])
        setText("")

        // 3. Manual DOM manipulation
        // Now we have access to input DOM element, and DOM element
        // has a method focus()
        inputRef.current.focus();
    }
    
    return (
        <>
        <h2>React Project Ideas</h2>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            onChange={handleChange}
            value={text}
            placeholder="Idea"
            /**
             * 2. Save the DOM node from markup into inputRef
             * 
             * After the first render, when react return the JSX markup,
             * it will associate the ref with this <input /> DOM element.
             * 
             * So after the first render, inputRef.current is the actual DOM node
             * that we have access to...
             * 
             */ 

            ref={inputRef}
            />
            <button>Submit</button>
        </form>

        <ol>
            {list.map((item, i) => <li key={i}>{item}</li>)}
        </ol>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);