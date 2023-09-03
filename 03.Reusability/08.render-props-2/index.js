import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Toggle from "./components/Toggle/index"

function App() {
    /**
     * 1. Problem here:
     * <Toggle.On> and <Toggle.Off> are just being conditional rendered,
     * so when we render one <div>, the other <div> will be removed by React.
     * Hence the `filled` class didn't actually applied
     * 
     * Here is what `render props` comes into play, we need to conditional
     * render `filled` class based on the internal state of Toggle
     */
    return (
        <>
          <Toggle>
            <Toggle.Button>
              <Toggle.On>
                <div className="box filled"></div>
              </Toggle.On>
              <Toggle.Off>
                <div className="box"></div>
              </Toggle.Off>
            </Toggle.Button>
          </Toggle>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
