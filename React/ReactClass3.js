// Question 1 

const fetchData = async () => {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  }
  
  const result = fetchData();
  console.log(result);
  
//   What does the above code log to the console?
  
//   A) The fetched data as an object.
//   B) The Promise object.
//   C) An error.
//   D) Undefined.
  
//   Correct answer: B) The Promise object.
  
//   Explanation: Since the `fetchData` function is asynchronous and returns a Promise, the result will be a Promise object, not the actual fetched data.



// Question 2

const fetchData = async (page) => {
    const response = await fetch(`https://api.example.com/data?page=${page}`);
    const data = await response.json();
    return data;
  }
  
  const result = fetchData(1);
  
//   What does the above code do?
  
//   A) Fetches data from the API's first page.
//   B) Fetches data from the API's second page.
//   C) Fetches data from the API based on the given page number.
//   D) Fetches all the data from the API.
  
//   Correct answer: C) Fetches data from the API based on the given page number.
  
//   Explanation: The `fetchData` function accepts a `page` parameter and fetches data from the API based on the provided page number. In this case, it fetches data from the API's first page since `page` is set to 1.
  

// Question 3
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then((response) => setData(response));
  }, []);

  const fetchData = async () => {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  };

  return <div>{data ? <p>Data loaded!</p> : <p>Loading...</p>}</div>;
};

// What is rendered by the `MyComponent` component while the data is being fetched?

// A) Data loaded!
// B) Loading...
// C) null
// D) Undefined.

// Correct answer: B) Loading...

// Explanation: While the data is being fetched, the component renders the message "Loading..." as indicated by the conditional rendering logic (`data ? <p>Data loaded!</p> : <p>Loading...</p>`).

// Question 4
import React, { useState, useCallback } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

// What is the purpose of using `useCallback` in the `increment` function?

// A) It prevents unnecessary re-rendering of the component.
// B) It caches the `increment` function for optimal performance.
// C) It ensures that the `increment` function has access to the latest `count` value.
// D) None of the above.

// Correct answer: C) It ensures that the `increment` function has access to the latest `count` value.

// Explanation: By using `useCallback` with the `increment` function and including `[count]` as the dependency array, it guarantees that the `increment` function always has the latest `count` value. Without this, the function would have access to the initial value of `count` and would not update correctly when `count` changes.
// Question 4
import React, { useMemo } from 'react';

const MyComponent = ({ data }) => {
  const sum = useMemo(() => {
    return data.reduce((acc, curr) => acc + curr, 0);
  }, [data]);

  return <p>Sum: {sum}</p>;
};

// What is the purpose of using `useMemo` in the `sum` calculation?

// A) It prevents unnecessary re-rendering of the component.
// B) It caches the `sum` calculation for optimal performance.
// C) It ensures that the `sum` calculation is correct.
// D) None of the above.

// Correct answer: B) It caches the `sum` calculation for optimal performance.

// Explanation: By using `useMemo` with the `sum` calculation function and including `[data]` as the dependency array, it memoizes (caches) the result of the calculation. This avoids re-computing the sum unnecessarily when `data` hasn't changed, improving performance.


// Question 5

import React, { useRef, useEffect } from 'react';

const MyComponent = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} type="text" />;
};

// What happens when the `MyComponent` component is rendered?

// A) The input field receives focus automatically.
// B) An error occurs because `inputRef` is not assigned correctly.
// C) The input field is empty.
// D) None of the above.

// Correct answer: A) The input field receives focus automatically.

// Explanation: In the `useEffect` hook, the `inputRef.current.focus()` statement is executed after the initial render. This focuses the input field since the `inputRef` is correctly assigned to the `ref` attribute of the input element.




// Question 6

import React from 'react';

const MyComponent = ({ name, age }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age} years old</p>
    </div>
  );
};

const App = () => {
  const person = { name: 'John', age: 25 };
  return <MyComponent {...person} />;
};

// What will be rendered to the screen by the `MyComponent` component?

// A) Error: Cannot spread object 'person' in JSX.
// B) John 25 years old
// C) Undefined
// D) Error: 'name' and 'age' props are missing.

// Correct answer: B) John 25 years old

// Explanation: The `App` component spreads the `person` object using the spread operator (`...`) and passes its properties (`name` and `age`) as props to the `MyComponent` component. The component then renders the `name` and `age` values as "John" and "25 years old", respectively.



// Question 7


import React from 'react';

const MyComponent = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

const App = () => {
  const products = [
    { id: 1, name: 'Product A' },
    { id: 2, name: 'Product B' },
    { id: 3, name: 'Product C' },
  ];

  return <MyComponent items={products} />;
};

// What will be rendered to the screen by the `MyComponent` component?

// A) Error: Each child in a list should have a unique "key" prop.
// B) Product A, Product B, Product C
// C) Undefined
// D) Error: 'items' prop is missing.

// Correct answer: B) Product A, Product B, Product C

// Explanation: The `MyComponent` component receives an `items` prop, which is an array of products. It then maps over the `items` array, rendering a list item for each product. The resulting list will display "Product A", "Product B", and "Product C" as expected.



// Question 8

import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('https://api.example.com/data');
    const result = await response.json();
    setData(result);
  };

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

// What is rendered by the `MyComponent` component?

// A) An empty unordered list (<ul></ul>).
// B) An error occurs because `data` is not assigned correctly.
// C) An unordered list with the fetched data's names as list items.
// D) None of the above.

// Correct answer: C) An unordered list with the fetched data's names as list items.

// Explanation: The `MyComponent` component initializes the `data` state with an empty array. In the `useEffect` hook, the `fetchData` function is called to fetch data from the provided URL. Once the data is received and parsed as JSON, it is stored in the `data` state. Then, the component renders an unordered list with each fetched item's name as a list item.


// Question 9


import React, { useRef } from 'react';

const MyComponent = () => {
  const inputRef = useRef();

  const handleButtonClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
};

// What happens when the "Focus Input" button is clicked?

// A) The input field receives focus.
// B) An error occurs because `inputRef` is not assigned correctly.
// C) The button receives focus.
// D) None of the above.

// Correct answer: A) The input field receives focus.

// Explanation: When the "Focus Input" button is clicked, the `handleButtonClick` function is executed, which calls the `focus` method on the `inputRef.current`. This causes the input field to receive focus, allowing the user to interact with it immediately.

