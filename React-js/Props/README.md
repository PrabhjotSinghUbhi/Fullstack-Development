# 📦 Props in React – A Complete Guide

## 🔰 What are Props?

**Props** (short for **properties**) are read-only components used to **pass data from one component to another** in React, especially from a parent to a child component.

Props allow components to be **reusable** and **dynamic**.

---

## 🧠 Why Use Props?

- To make components **reusable**.
- To **customize** child components based on the data passed.
- To **separate concerns** and follow the **unidirectional data flow** in React.

---

## 🛠️ How Props Work

Props are passed to a component in a way similar to passing arguments to a function.

### Example: Basic Props Usage

```jsx
// ParentComponent.jsx
import React from "react";
import Greeting from "./Greeting";

function ParentComponent() {
  return <Greeting name="Alice" />;
}

export default ParentComponent;
```

```jsx
// Greeting.jsx
import React from "react";

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Greeting;
```

---

## Destructuring Props

Instead of using props.name, we can destructure props directly in the function parameters.

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

---

## ⚠️ Important Points

- Props are read-only. You cannot modify them inside the component.

- Props help in component communication.

- Props can be strings, numbers, arrays, functions, or even other components.

## Passing Different Types of Props.

```jsx
function Example({ text, number, items, handleClick }) {
  return (
    <div>
      <p>{text}</p>
      <p>{number}</p>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
```
```jsx
function Example({ text, number, items, handleClick }) {
  return (
    <div>
      <p>{text}</p>
      <p>{number}</p>
      <ul>{items.map((item, i) => <li key={i}>{item}</li>)}</ul>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
```

## 🧪 PropTypes (Optional but Recommended)
You can use prop-types package to validate props.

```jsx
npm install prop-types
```

```jsx
import PropTypes from 'prop-types';
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};
```

### 🔁 Default Props
You can set default values for props using defaultProps.

```jsx
Greeting.defaultProps = {
  name: 'Guest',
};
```