// Question 1

const MyComponent = () => {
    const [count, setCount] = useState(0);
  
    const incrementCount = () => {
      setCount(count + 1);
    };
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={incrementCount}>Increment</button>
      </div>
    );
  };

// A. The component renders a paragraph displaying the current count value and a button that increments the count when clicked.
// B. The component renders an input field and a button, allowing the user to type a number and update the count.
// C. The component renders a dropdown menu with count values and updates the count based on the selected option.
// D. The component renders a countdown timer and updates the count every second.

// Explanation: Option A is the correct answer. The component displays the current count value using the state variable count and updates it by calling the incrementCount function when the button is clicked.
  
// Question 2

const MyComponent = () => {
    const [name, setName] = useState('');
  
    const handleInputChange = (e) => {
      setName(e.target.value);
    };
  
    return (
      <div>
        <input type="text" value={name} onChange={handleInputChange} />
        <p>Hello, {name}!</p>
      </div>
    );
  };


// A. The component renders a text input field and a paragraph that displays a greeting with the entered name.
// B. The component renders a button and a paragraph that displays the name when the button is clicked.
// C. The component renders a dropdown menu with names and updates the displayed name based on the selected option.
// D. The component renders a list of names and allows the user to add new names using an input field.

// Explanation: Option A is the correct answer. The component renders an input field that updates the name state variable using the handleInputChange function. The entered name is then displayed in the greeting paragraph.


// QUestion 3

const MyComponent = () => {
    const [isVisible, setIsVisible] = useState(true);
  
    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
  
    return (
      <div>
        {isVisible && <p>This paragraph is visible.</p>}
        <button onClick={toggleVisibility}>Toggle Visibility</button>
      </div>
    );
  };

// A. The component renders a paragraph that is initially visible, and a button that toggles its visibility.
// B. The component renders a list of paragraphs, and the button removes or adds paragraphs based on the visibility state.
// C. The component renders an input field and a button that toggles the visibility of the entered text.
// D. The component renders a checkbox and a button that updates the visibility state based on the checkbox value.

// Explanation: Option A is the correct answer. The component initially renders a visible paragraph, and clicking the button toggles its visibility using the toggleVisibility function.
  
//   Question 4

const MyComponent = () => {
    const [items, setItems] = useState([]);
  
    const addItem = () => {
      setItems([...items, 'New Item']);
    };
  
    return (
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={addItem}>Add Item</button>
      </div>
    );
  };


// A. The component renders an unordered list that displays the items stored in the items state variable, and a button that adds a new item to the list when clicked.
// B. The component renders a text input field and a button that adds the entered text as a new item to the list.
// C. The component renders a dropdown menu with items and updates the displayed item based on the selected option.
// D. The component renders a list of items, and the button removes or adds items to the list based on the user's selection.

// Explanation: Option A is the correct answer. The component displays an unordered list based on the items state variable. Clicking the button triggers the addItem function, which adds a new item ('New Item') to the list.
  
// Question 5

import React, { useEffect } from 'react';

const DataFetcher = () => {
  useEffect(() => {
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return <div>Data Fetcher</div>;
};

// A. The component fetches data from an API and logs it to the console.
// B. The component renders a loading spinner until the data is fetched.
// C. The component renders a form for entering data and sends it to the server.
// D. The component renders a list of fetched data items.

// Explanation: Option A is the correct answer. The useEffect hook is used with an empty dependency array [], which means the effect runs only once when the component mounts. It fetches data from an API and logs the retrieved data to the console.



// Question 6

import React, { useRef } from 'react';

const Form = () => {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
};


// A. The component renders a form with an input field and a submit button. When the form is submitted, it logs the entered value to the console.
// B. The component renders a form with multiple input fields, and it submits the form data to the server.
// C. The component renders a form with validation checks on the input field. It displays error messages if the input is invalid.
// D. The component renders a form with auto-suggestions for the input field based on the user's previous inputs.

// Explanation: Option A is the correct answer. The component uses the useRef hook to create a ref named inputRef. The ref is attached to the input field using the ref attribute. When the form is submitted, the handleSubmit function logs the value of the input field to the console using the inputRef.current.value.



// Question 7
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div>Time: {time}</div>;
};

// A. The component displays an incrementing timer that updates every second.
// B. The component renders a stopwatch that can be started and stopped.
// C. The component renders a countdown timer that counts down from a specified value.
// D. The component displays the current time and updates it every second.

// Explanation: Option A is the correct answer. The component uses the useState hook to declare a state variable time and the useEffect hook with an empty dependency array []. It starts a timer that increments the time state value every second and returns a cleanup function to clear the timer when the component unmounts.


// QUestion 8

import React, { useState, useCallback } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

// A. The component renders a paragraph displaying the current count value and a button that increments the count when clicked.
// B. The component renders an input field and a button, allowing the user to type a number and update the count.
// C. The component renders a dropdown menu with count values and updates the count based on the selected option.
// D. The component renders a countdown timer and updates the count every second.

// Explanation: Option A is the correct answer. The component uses the useState hook to declare a state variable count and the useCallback hook to memoize the increment function. Clicking the button triggers the memoized increment function, which increments the count state value.


// Question 9

import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>Data: {data}</div>;
};

// A. The component fetches data from an API and displays it when the data is retrieved.
// B. The component renders a loading spinner until the data is fetched.
// C. The component renders a form for entering data and sends it to the server.
// D. The component renders a list of fetched data items.

// Explanation: Option B is the correct answer. The component initially sets loading to true, indicating that data is being fetched. It displays the loading message "Loading..." until the data is fetched, at which point loading is set to false, and the fetched `


// Question 10


import React, { useState, useMemo } from 'react';

const ExpensiveCalculation = () => {
  const [count, setCount] = useState(0);

  const result = useMemo(() => {
    // Perform expensive calculation using count
    return count * 2;
  }, [count]);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Result: {result}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};


// Options:
// A. The component renders a paragraph displaying the current count value, the result of an expensive calculation, and a button that increments the count when clicked.
// B. The component renders an input field and a button, allowing the user to type a number and update the count.
// C. The component renders a dropdown menu with count values and updates the count based on the selected option.
// D. The component renders a countdown timer and updates the count every second.

// Explanation: Option A is the correct answer. The component uses the useState hook to declare a state variable count and the useMemo hook to memoize the result of an expensive calculation. The memoized result value is updated whenever count changes. The component displays the current count value, the memoized result, and a button to increment the count.





