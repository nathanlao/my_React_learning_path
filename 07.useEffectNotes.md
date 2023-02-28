## What is a "side effect" in React? Examples?
Any code that lives in an outside system
- LS
- API
- Websockets
- Two states to keep in sync with each other


## What is NOT a "side effect" in React? Examples?
Anything that React is in charge of.
- Maintaining state
- Keeping the UI in sync with the data
- Render DOM elements

## When does React run useEffect function? When does it NOT run the effect function?
- Will RUN as soon as the component loads (first render), on every re-render of the component (Assuming no dependencies array)

- Will NOT run when the values of dependencies in the array stay the same between renders

##  What is the "dependecies array"?
- Second parameter to the useEffect function
- Allow React to determine whether it should re-run the effect or not, an array of values that when React is in charge of re-rendering a component, it will compare the values in the original array with the values in the new array (not the same -> rerun the effect function).

