1. // What is the output of the following code?

console.log(1);
setTimeout(() => console.log(2), 0);
console.log(3);

// a) 1 2 3
// b) 1 3 2
// c) 2 1 3
// d) 1 3

// Correct Answer: b) 1 3 2

// Explanation: The code will print "1" first, then immediately print "3". The setTimeout callback function with a delay of 0 milliseconds will be executed after the current synchronous code finishes executing, so it will print "2" last.


2. // What is the output of the following code?


async function getData() {
    return await Promise.resolve('Hello');
  }
  
console.log(getData());

// a) Promise {<pending>}
// b) Hello
// c) undefined
// d) Error

// Correct Answer: a) Promise {<pending>}

// Explanation: The function getData() returns a promise that resolves with the value 'Hello'. When we log the result of getData(), it will display a pending promise object.


// 3. What is the output of the following code?

async function fetchData() {
    throw new Error('Error occurred');
  }
  
  fetchData().catch((error) => console.log(error.message));


// a) Error occurred
// b) Uncaught Error: Error occurred
// c) undefined
// d) Error

// Correct Answer: a) Error occurred

// Explanation: The function fetchData() throws an error using the throw keyword. The error is caught in the catch block, and the error message is logged, which is 'Error occurred'.

// 4. What is the output of the following code?


async function processArray(array) {
    const results = [];
    for (const item of array) {
      const processedItem = await processItem(item);
      results.push(processedItem);
    }
    return results;
  }
  
  const data = [1, 2, 3];
  console.log(processArray(data));


// a) Promise {<pending>}
// b) [1, 2, 3]
// c) [Promise {<pending>}]
// d) Error

// Correct Answer: a) Promise {<pending>}

// Explanation: The processArray function is an async function that processes each item in the data array using processItem function. Since processItem is assumed to be asynchronous, the processArray function itself becomes asynchronous and returns a pending promise.


// 5. What is the output of the following code?

function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => resolve('Data'), 1000);
    });
  }
  
  async function logData() {
    const result = await fetchData();
    console.log(result);
  }
  
  logData();
  console.log('End');

// a) End
// Data
// b) Data
// End
// c) Data
// d) End

// Correct Answer: b) End
// Data

// Explanation: The logData function is an async function that awaits the result of the fetchData function. It logs the resolved data ('Data') after 1 second. Till then, 'End' is logged immediately after the logData function call.
  


// 6. What is the output of the following code?

async function getData() {
    return 'Hello';
  }
  
  console.log(await getData());

// a) Promise {<resolved>: "Hello"}
// b) Hello
// c) undefined
// d) Error

// Correct Answer: b) Hello

// Explanation: The await keyword is used to wait for the promise returned by getData() to resolve. Since getData() returns the value 'Hello', it is immediately logged.

// 7. What is the output of the following code?

async function fetchData() {
    return Promise.reject('Error occurred');
  }
  
  fetchData()
    .then((data) => console.log(data))
    .catch((error) => console.log(error));


// a) Error occurred
// b) Uncaught Error: Error occurred
// c) undefined
// d) Error

// Correct Answer: a) Error occurred

// Explanation: The fetchData function returns a rejected promise with the reason 'Error occurred'. The error is caught in the catch block, and the error message is logged.


// 8. What is the output of the following code?

async function fetchData() {
    throw new Error('Error occurred');
  }
  
  (async () => {
    try {
      await fetchData();
    } catch (error) {
      console.log(error.message);
    }
  })();

// a) Error occurred
// b) Uncaught Error: Error occurred
// c) undefined
// d) Error

// Correct Answer: a) Error occurred

// Explanation: The fetchData function throws an error using the throw keyword. The error is caught in the surrounding try...catch block, and the error message is logged.

// 9. What is the output of the following code?


async function fetchData() {
    return Promise.resolve('Data');
  }
  
  fetchData().then((data) => console.log(data));
  console.log('End');


// a) Data
// End
// b) End
// Data
// c) Promise {<resolved>: "Data"}
// d) Data

// Correct Answer: b) End
// Data

// Explanation: The fetchData function returns a resolved promise with the value 'Data'. The then method is called on the promise to log the resolved data. However, 'End' is logged first as it is synchronous code.


// 10. What is the output of the following code?

function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject('Error'), 1000);
    });
  }
  
  async function logData() {
    try {
      const result = await fetchData();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  
  logData();
  console.log('End');


// a) Error
// End
// b) End
// Error
// c) Uncaught Error: Error
// d) Error
// End

// Correct Answer: a) Error
// End

// Explanation: The fetchData function returns a promise that is intentionally rejected after 1 second. Inside the logData async function, the promise is awaited within a try...catch block. As the promise is rejected, the catch block is executed and logs 'Error'. 'End' is logged afterward.
  
  

  
  


  





  
