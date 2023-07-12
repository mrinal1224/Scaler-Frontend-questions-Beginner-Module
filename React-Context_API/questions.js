// Question 1:

// Assume necessary imports and setup
const ThemeContext = createContext("light");

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Header />
    </ThemeContext.Provider>
  );
}

function Header() {
  return (
    <Title />
  );
}

function Title() {
  const theme = useContext(ThemeContext);
  return (
    <h1>{theme}</h1>
  );
}

// What will be the output of the above code snippet?

// A) "light"
// B) "dark"
// C) Undefined
// D) It will throw an error

// Correct answer: B) "dark"

// Explanation: The ThemeContext.Provider component sets the value of the ThemeContext to "dark". The Title component, using the useContext hook, accesses the current value of ThemeContext, which is "dark". Therefore, the output will be "dark".


// Question 2

const UserContext = createContext();

function App() {
  const user = {
    name: "John",
    age: 25
  };

  return (
    <UserContext.Provider value={user}>
      <Header />
    </UserContext.Provider>
  );
}

function Header() {
  return (
    <Title />
  );
}

function Title() {
  const user = useContext(UserContext);
  return (
    <h1>{user.name}</h1>
  );
}

// What will be the output of the above code snippet?

// A) "John"
// B) 25
// C) Undefined
// D) It will throw an error

// Correct answer: A) "John"

// Explanation: The UserContext.Provider component sets the value of the UserContext to the user object, which has a name property set to "John". The Title component, using the useContext hook, accesses the UserContext and retrieves the name property from the user object. Therefore, the output will be "John".


// Question 3


const UserContext = createContext();

function App() {
  const user = {
    name: "John",
    age: 25
  };

  return (
    <UserContext.Provider value={user}>
      <Header />
    </UserContext.Provider>
  );
}

function Header() {
  return (
    <Title />
  );
}

function Title() {
  const user = useContext(UserContext);
  return (
    <h1>{user.role || "Guest"}</h1>
  );
}

// What will be the output of the above code snippet?

// A) "John"
// B) 25
// C) "Guest"
// D) It will throw an error

// Correct answer: C) "Guest"

// Explanation: The Title component tries to access the role property from the user object. However, the user object does not have a role property. In such cases, the || operator is used to provide a default value. Since the role property does not exist, the default value "Guest" will be displayed.



// Question 4
const ThemeContext = createContext("light");

function App() {
  return (
    <ThemeContext.Provider>
      <Header />
    </ThemeContext.Provider>
  );
}

function Header() {
  return (
    <Title />
  );
}

function Title() {
  const theme = useContext(ThemeContext);
  return (
    <h1>{theme}</h1>
  );
}

// What will be the output of the above code snippet?

// A) "light"
// B) Undefined
// C) It will throw an error
// D) The code will not compile

// Correct answer: A) "light"

// Explanation: The ThemeContext.Provider component does not have a value prop specified. In such cases, the default value provided during the createContext call is used. Therefore, the output will be "light".



// Question 5


const UserContext = createContext("guest");

function App() {
  return (
    <UserContext.Provider value="John">
      <Header />
    </UserContext.Provider>
  );
}

function Header() {
  return (
    <Title />
  );
}

function Title() {
  const user = useContext(UserContext);
  return (
    <h1>{user}</h1>
  );
}



// What will be the output of the above code snippet?

// A) "guest"
// B) "John"
// C) Undefined
// D) It will throw an error

// Correct answer: B) "John"

// Explanation: The UserContext.Provider component sets the value of the UserContext to "John". The Title component, using the useContext hook, accesses the current value of UserContext, which is "John". Therefore, the output will be "John".


// Question 6

const UserContext = createContext("guest");

function App() {
  return (
    <UserContext.Provider value="John">
      <Header />
    </UserContext.Provider>
  );
}

function Header() {
  return (
    <Title />
  );
}

function Title() {
  return (
    <UserContext.Consumer>
      {(user) => <h1>{user}</h1>}
    </UserContext.Consumer>
  );
}


// What will be the output of the above code snippet?

// A) "guest"
// B) "John"
// C) Undefined
// D) It will throw an error

// Correct answer: B) "John"

// Explanation: The UserContext.Consumer component provides a function as a child, which receives the current value of the UserContext as its argument. In this case, the value is "John". The function then renders the h1 element with the received value, resulting in the output "John".


// Question 7


const ThemeContext = createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Header />
    </ThemeContext.Provider>
  );
}

function Header() {
  return (
    <Title />
  );
}

function Title() {
  const theme = useContext(ThemeContext);
  return (
    <h1>{theme || "light"}</h1>
  );
}

// What will be the output of the above code snippet?

// A) "dark"
// B) "light"
// C) Undefined
// D) It will throw an error

// Correct answer: A) "dark"

// Explanation: The ThemeContext.Provider component sets the value of the ThemeContext to "dark". The Title component tries to access the current value of ThemeContext using the useContext hook. Since the value is "dark", it will be displayed. The || operator is not needed in this case as there is a value available.


// Question 8


const UserContext = createContext();

function App() {
  const user = {
    name: "John",
    age: 25
  };

  return (
    <UserContext.Provider value={user}>
      <Header />
    </UserContext.Provider>
  );
}

function Header() {
  return (
    <Title />
  );
}

function Title() {
  const user = useContext(UserContext);
  return (
    <h1>{user.age}</h1>
  );
}

// What will be the output of the above code snippet?

// A) "John"
// B) 25
// C) Undefined
// D) It will throw an error

// Correct answer: B) 25

// Explanation: The Title component tries to access the age property from the user object, which is set as the value of the UserContext. The age property is set to 25, so the output will be 25.




















