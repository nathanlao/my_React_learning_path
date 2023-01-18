# What do props help us accomplish?
Make a component more reusable.

## How do you pass a prop into a component?
`<myCustomComponent title={props.sth}/>`

## Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?

No! Because the JSX we use to describe native DOM elemtents will
be turned into REAL DOM elements by React. And real DOM elements
only have the properties/attributes specified in the HTML specification.
Which does not include properties like blahblahblah.

## How do I receive props in a component?
function Navbar(props) {
    `// console.log(props.sth)
    return (
        <header>
            ...
        </header>
    )`
}

## What data type is `props` when the component receives it?
An object!

# Props vs. State
`Props` refers to the properties being passed into a component in order for it to work properly, similar to how a funtion receives parameters. A component receiving props is not allowed to modify those props manually (immutable).

`State` refers to values that are managed by the component, similar to variables declared inside a function. Anytime you have changing values that should be saved/displayed, you'll likely be using state.
- In React, values that are created by the function or the component itself are usually handled with **state**


## How to describe the concept of "state"?
A way for React to `remember saved values` from **within** a component.
This is similar to declaring variables from within a component,
with a few added bonuses.

## When to use props?
Anytime you want to `pass data into a component` so that
component can determine `what will get displayed` on the
screen.

## When to use state?
Anytime you want a component to `maintain some values` from
**within** the component. (And "remember" those values even
when React re-renders the component)

## What does "immutable" mean? Are props immutable? Is state immutable?
unchangable. Props are immutable. State is mutable.

## useState()

### 2 options for what you can pass in to a state setter function (e.g. `setCount`): 

1. New value of state `setCount(10)`
2. Callback function: whatever the callback function returns === new value of state


### When to pass the 1 option to the state setter function?
- Whenever you **don't** need the previous value of state to determine the new value of state.


### When to pass the 2 option to the state setter function?
- Whenever you **DO** need the previous value of state to determine the new value of state.