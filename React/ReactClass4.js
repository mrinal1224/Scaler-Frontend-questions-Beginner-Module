
// Question 1

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <h1>Hello, React!</h1>;
};

ReactDOM.render(<App />, document.getElementById('root'));

What will be rendered to the DOM by the above code?

A) Hello, React!
B) <h1>Hello, React!</h1>
C) #root
D) Undefined.

Correct answer: B) <h1>Hello, React!</h1>

Explanation: The code renders the `<App />` component into the DOM using `ReactDOM.render()`. The JSX expression `<h1>Hello, React!</h1>` is translated to the corresponding HTML element, and that element is appended to the element with the `id` "root" in the DOM.



// Question 2


import React from 'react';

const App = () => {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>Welcome to the world of React.</p>
    </div>
  );
};

What is the term used to describe the tree-like structure created by the JSX code in the `App` component?

A) Real DOM
B) Virtual DOM
C) Reconciliation tree
D) JSX tree.

Correct answer: B) Virtual DOM

Explanation: The JSX code in the `App` component creates a virtual representation of the DOM structure. This virtual representation is called the Virtual DOM. It is an abstraction provided by React, allowing efficient updates and reconciliation with the actual (or real) DOM.


// Question 3-


import React from 'react';

const App = () => {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>Welcome to the world of React.</p>
    </div>
  );
};

//What is the process by which React compares the Virtual DOM with the actual DOM and updates only the necessary parts?

// A) Virtualization
// B) Comparison
// C) Reconciliation
// D) Diffing

// Correct answer: C) Reconciliation

// Explanation: Reconciliation is the process by which React compares the Virtual DOM with the actual DOM and determines the minimal set of changes required to synchronize the two. It efficiently updates only the necessary parts, resulting in optimal performance.

// Question 4

import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

// What will be the displayed count when the "Increment" button is clicked multiple times?

// A) 0
// B) 1
// C) The number of times the button was clicked
// D) Undefined.

// Correct answer: C) The number of times the button was clicked

// Explanation: When the "Increment" button is clicked, the `handleClick` function is executed. By using the functional form of `setCount` and passing a callback, we ensure that the `prevCount` value represents the previous state accurately. This prevents any issues related to stale closures. Each click of the button will increment the count by 1, leading to the displayed count being the number of times the button was clicked.

Question 5:

import React from 'react';

const App = () => {
  const name = 'John Doe';
  const age = 30;

  return (
    <div>
      <h1>{name}</h1>
      <p>{age} years old</p>
    </div>
  );
};

// What will be rendered to the screen by the `App` component?

// A) John Doe 30 years old
// B) <h1>John Doe</h1> <p>30 years old</p>
// C) Undefined
// D) Error: 'name' and 'age' props are missing.

// Correct answer: A) John Doe 30 years old

// Explanation: The `App` component directly renders the `name` and `age` variables in JSX, which will be evaluated and displayed as "John Doe" and "30 years old", respectively.

// Question 7:

import React from 'react';

const App = () => {
  const items = [1, 2, 3, 4, 5];
  const doubledItems = items.map(item => item * 2);

  return <ul>{doubledItems.map(item => <li key={item}>{item}</li>)}</ul>;
};

// What will be rendered to the screen by the `App` component?

// A) An unordered list with doubled numbers: 2, 4, 6, 8, 10
// B) An unordered list with original numbers: 1, 2, 3, 4, 5
// C) Undefined
// D) Error: Each child in a list should have a unique "key" prop.

// Correct answer: A) An unordered list with doubled numbers: 2, 4, 6, 8, 10

// Explanation: The `App` component doubles each item in the `items` array using the `map` function and stores the result in the `doubledItems` array. Then, it renders an unordered list (`<ul>`) where each item in the `doubledItems` array is rendered as a list item (`<li>`). The rendered list will contain the doubled numbers: 2, 4, 6, 8, and 10.

Question 8:

import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    console.log('Component mounted');
  }, []);

  return <h1>Hello, React!</h1>;
};

// What will be logged to the console when the `App` component mounts?

// A) 'Component mounted'
// B) 'Hello, React!'
// C) Undefined
// D) Nothing will be logged.

// Correct answer: A) 'Component mounted'

// Explanation: The `useEffect` hook is used with an empty dependency array (`[]`), which means the effect callback is only executed once when the component mounts. In this case, it logs 'Component mounted' to the console when the `App` component is mounted for the first time.

Question 9:

import React, { useCallback } from 'react';

const App = () => {
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);

  return <button onClick={handleClick}>Click me</button>;
};

// What will be logged to the console when the button is clicked?

// A) 'Button clicked'
// B) 'Click me'
// C) Undefined
// D) Nothing will be logged.

// Correct answer: A) 'Button clicked'

// Explanation: The `useCallback` hook is used to create a memoized version of the `handleClick` function. By providing an empty dependency array (`[]`), the memoized function will remain the same throughout the component's lifecycle. When the button is clicked, the memoized `handleClick` function is called, which logs 'Button clicked' to the console.

// Question 10:

import React, { useMemo } from 'react';

const App = () => {
  const largeArray = useMemo(() => Array.from({ length: 1000000 }, (_, index) => index), []);

  return <h1>Array length: {largeArray.length}</h1>;
};

// What will be rendered to the screen by the `App` component?

// A) Array length: 1000000
// B) Array length: 0
// C) Undefined
// D) Error: Out of memory.

// Correct answer: A) Array length: 1000000

// Explanation: The `useMemo` hook is used to memoize the creation of the `largeArray`. The memoized value is only computed once when the component mounts (due to the empty dependency array `[]`). The `largeArray` is an array of length 1000000, created using `Array.from` with the desired length and indices. The rendered output will display "Array length: 1000000", indicating the length of the memoized `largeArray`.




