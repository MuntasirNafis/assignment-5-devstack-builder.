##  React Questions & Answers

### 1. What is JSX, and why is it used in React?
Answer: JSX is a simple way to write HTML code inside JavaScript files in React. It is used because it makes writing UI easy to read and helps us put HTML structure and JavaScript logic together in one place.



### 2. What is the difference between props and state?
Answer:
Props: Data passed from a parent component to a child. The child cannot change this data (it is read-only).
State: Data created inside a component that can change when a user clicks something or does an action. When state changes, the UI updates.


### 3. What does the useState hook do, and where did you use it in this project?
Answer:The `useState` hook helps functional components create and manage their own state. In this project, I used it in `App.jsx` to hold the technology list, manage the items added to the stack, and handle the loading spinner state.


### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
Answer: The `useEffect` hook runs side effects like fetching data from an API or file. I used it to load the `technologies.json` file once when the page loads so it doesn't fetch data again and again on every render.


### 5. Why does every item in a .map() list need a unique key prop?
Answer: React needs a unique `key` to identify each item in a list. It helps React know which item changed, added, or deleted, so it can update only that specific item instead of re-rendering the whole list.


### 6. What is conditional rendering? Show one place you used it.
Answer: Conditional rendering means showing different UI parts based on a condition (like using `? :` or `&&`). I used it in the Sidebar to show "Your Stack is empty" when no items are added, and show the selected list when items are added.


### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Answer:
Parent to Child:We pass data down using props.
 Child to Parent: The parent passes a function to the child as a prop, and when the child runs that function with some data, the parent receives it.