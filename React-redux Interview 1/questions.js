// Question 1


import React from 'react';

function ExampleComponent() {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default ExampleComponent;

// What is the purpose of the React.useState hook in the above code?
// A) It provides access to the current state value and a function to update it.
// B) It is used to handle side effects in a functional component.
// C) It performs lazy initialization of a state value.
// D) It allows us to subscribe to the Redux store.

// Explanation: The correct answer is A. The React.useState hook is used to manage state in functional components. It returns an array with the current state value and a function to update that value.


// Question 2

import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default ExampleComponent;


// What does the useEffect hook do in the above code?
// A) It updates the document title to reflect the current count value.
// B) It triggers an API request to fetch data from a server.
// C) It handles the click event of the "Increment" button.
// D) It defines a new state variable.

// Explanation: The correct answer is A. The useEffect hook is used to perform side effects in functional components. In this example, it updates the document title whenever the count state variable changes.


// Question 3

import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function ExampleComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}

export default ExampleComponent;


// What does the useReducer hook do in the above code?
// A) It manages the state of the component.
// B) It performs asynchronous operations in a functional component.
// C) It handles user input events in a controlled component.
// D) It allows complex state transitions by specifying actions.

// Explanation: The correct answer is D. The useReducer hook is used for managing complex state transitions in functional components. It takes a reducer function and an initial state as arguments and returns the current state and a dispatch function to trigger state updates.


// Question 4

import React, { useState, useTransition } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);
  const [startTransition, isPending] = useTransition();

  const increment = () => {
    startTransition(() => {
      setCount(count + 1);
    });
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      {isPending && <p>Loading...</p>}
    </div>
  );
}

export default ExampleComponent;


// What is the purpose of the useTransition hook in the above code?
// A) It triggers a smooth transition animation between UI states.
// B) It handles form validation in a controlled component.
// C) It optimizes concurrent updates by delaying the rendering of some components.
// D) It enables asynchronous data fetching in a functional component.

// Explanation: The correct answer is C. The useTransition hook is used to optimize concurrent updates in React. It delays the rendering of some components while updates are in progress, which can lead to a better user experience.


// Question 5

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, selectCount } from './counterSlice';

function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default Counter;


// What is the purpose of the useSelector hook in the above code?
// A) It dispatches an action to the Redux store.
// B) It selects a specific piece of state from the Redux store.
// C) It connects the component to the Redux store.
// D) It defines a new state variable.

// Explanation: The correct answer is B. The useSelector hook is used to select a specific piece of state from the Redux store. In this example, it selects the count value from the Redux store, which is then displayed in the component.


// Question 6


import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementAsync, selectCount } from './counterSlice';

function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const handleIncrementAsync = () => {
    dispatch(incrementAsync());
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrementAsync}>Increment Async</button>
    </div>
  );
}

export default Counter;


// What does the dispatch function do in the above code?
// A) It increments the count value asynchronously.
// B) It triggers an API request to fetch data from a server.
// C) It updates the count value in the Redux store.
// D) It defines a new action in the Redux store.

// Explanation: The correct answer is C. The dispatch function is used to update the state in the Redux store by dispatching actions. In this example, it dispatches the incrementAsync action, which increments the count value asynchronously.

// question 7


import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCount, increment } from './counterSlice';

function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default Counter;


// What is the purpose of the dispatch function in the above code?
// A) It triggers a re-render of the component.
// B) It updates the Redux store with a new state.
// C) It connects the component to the Redux store.
// D) It increments the count value in the component's state.

// Explanation: The correct answer is B. The dispatch function is used to update the Redux store with a new state. In this example, it dispatches the increment action, which increments the count value in the Redux store.


// question 8

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, updateUser } from './userSlice';

function User() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleUpdateUser = () => {
    dispatch(updateUser({ name: 'John', age: 30 }));
  };

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={handleUpdateUser}>Update User</button>
    </div>
  );
}

export default User;


// What does the updateUser action do in the above code?
// A) It dispatches an action to update the user's name and age.
// B) It fetches user data from an API endpoint.
// C) It selects the user's name and age from the Redux store.
// D) It updates the user's name and age in the component's state.

// Explanation: The correct answer is A. The updateUser action is dispatched to update the user's name and age in the Redux store. In this example, it dispatches the action with an object containing the new name and age values


// Question 9

import React from 'react';
import { useSelector } from 'react-redux';
import { selectPostsByUser } from './postSlice';

function UserPosts({ userId }) {
  const posts = useSelector((state) => selectPostsByUser(state, userId));

  return (
    <div>
      <h2>Posts by User {userId}</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserPosts;

// What is the purpose of the selectPostsByUser selector in the above code?
// A) It fetches user posts from an API endpoint.
// B) It updates the Redux store with new post data.
// C) It filters and selects posts based on the user ID.
// D) It defines a new action in the Redux store.

// Explanation: The correct answer is C. The selectPostsByUser selector filters and selects posts from the Redux store based on the user ID. It allows displaying only the posts associated with a specific user.


// Question 10

import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from './authSlice';

function Profile() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome, User!</h2>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
}

export default Profile;


// What is the purpose of the selectIsLoggedIn selector in the above code?
// A) It fetches the user's profile data from an API endpoint.
// B) It updates the Redux store with the user's login status.
// C) It selects the user's login status from the Redux store.
// D) It defines a new action in the Redux store.

// Explanation: The correct answer is C. The selectIsLoggedIn selector selects the user's login status from the Redux store. It allows conditional rendering based on whether the user is logged in or not.






