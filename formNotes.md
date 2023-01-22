- In a vanilla JS app, at what point in the form submission process we gather all the data from the filled-out form?
   Right before the form is submitted.


- In a React app, when to gather all the data from the filled-out form?
As the form is being filled out. The data is all held in local state.


- Which attribute in the form elements (value, name, onChange, etc.) should match the property name being held in state for that input?
   `name` property.


- What's different about a saving the data from a checkbox element vs. other form elements?
A checkbox uses the `checked` property to determine what should
be saved in state. Other form elements use the `value` property instead.


- How to watch for a form submit? How to trigger a form submit?

Add `onSubmit` handler on the `form` element. `Button` tag inside a form can trigger a form submit