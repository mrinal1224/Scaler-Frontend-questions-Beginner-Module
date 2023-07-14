// Question 1:
// Which function from Redux Toolkit is used to create a Redux store with pre-configured settings?
// A) createStore
// B) configureStore (Correct Answer)
// C) createReducer
// D) createSlice

// Explanation: The correct answer is B) configureStore. Redux Toolkit provides the configureStore function, which simplifies the creation of a Redux store by automatically setting up various middleware and enhancers, such as Redux DevTools integration and thunk middleware.

// Question 2:
// Which Redux Toolkit utility function is used to create a Redux slice?
// A) createSlice (Correct Answer)
// B) createReducer
// C) createAsyncThunk
// D) createAction

// Explanation: The correct answer is A) createSlice. The createSlice function from Redux Toolkit allows you to define a slice of the Redux state, including its initial state, reducer functions, and action creators, all in a concise and efficient manner.

// Question 3:
// Which Redux Toolkit function is used to create a pre-configured async thunk action?
// A) createAction
// B) createSlice
// C) createReducer
// D) createAsyncThunk (Correct Answer)

// Explanation: The correct answer is D) createAsyncThunk. Redux Toolkit provides the createAsyncThunk function, which simplifies the creation of async actions that involve asynchronous logic, such as API requests. It automatically generates pending, fulfilled, and rejected action types and corresponding action creators.

// Question 4:
// Which Redux Toolkit function is used to define a reducer function with a simplified syntax?
// A) createAction
// B) createReducer (Correct Answer)
// C) createSlice
// D) configureStore

// Explanation: The correct answer is B) createReducer. The createReducer function in Redux Toolkit allows you to define a reducer function using a simplified syntax, known as "builder callbacks." It removes the need for switch statements and handles immutable updates automatically.

// Question 5:
// Which Redux Toolkit function is used to define an action creator with a simplified syntax?
// A) createAction (Correct Answer)
// B) createSlice
// C) configureStore
// D) createAsyncThunk

// Explanation: The correct answer is A) createAction. The createAction function in Redux Toolkit allows you to define an action creator with a simplified syntax. It creates an action object with a type and a payload, if provided.

// Question 6:
// Which Redux Toolkit function is used to combine multiple reducers into one?
// A) createReducer
// B) combineReducers
// C) configureStore
// D) createSlice

// Explanation: The correct answer is B) combineReducers. Although combineReducers is not a Redux Toolkit-specific function, it is commonly used with Redux Toolkit to combine multiple reducer functions into a single reducer. It allows you to split your state and reducers into smaller, more manageable pieces.

// Question 7:
// Which Redux Toolkit function is used to access the current Redux store state?
// A) useSelector
// B) useDispatch
// C) createReducer
// D) createSlice

// Explanation: The correct answer is A) useSelector. The useSelector hook is provided by the react-redux library, which is commonly used with Redux Toolkit. It allows you to access the current Redux store state in your React components.

// Question 8:
// Which Redux Toolkit function is used to dispatch actions from React components?
// A) useSelector
// B) useDispatch (Correct Answer)
// C) configureStore
// D) createAsyncThunk

// Explanation: The correct answer is B) useDispatch. The useDispatch hook, provided by the react-redux library, is used to access the dispatch function of the Redux store. It allows you to dispatch actions from your React components.

// Question 9:
// Which Redux Toolkit function is used to generate action types?
// A) createActionType
// B) createAction
// C) createReducer
// D) createAsyncThunk

// Explanation: The correct answer is D) createAsyncThunk. Although createAsyncThunk is primarily used to create async actions, it also generates action types automatically for pending, fulfilled, and rejected states. These action types can be used to handle different states of asynchronous operations.

// Question 10:
// Which Redux Toolkit function is used to generate action objects without payload?
// A) createAction
// B) createReducer
// C) createSlice
// D) createAsyncThunk

// Explanation: The correct answer is A) createAction. The createAction function can be used to generate action objects without payload. If you don't need to attach any data to an action, you can use createAction to create simple action objects with just a type.