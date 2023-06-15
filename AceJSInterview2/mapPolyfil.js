// Problem Description: Polyfill for the map Method

// Implement a polyfill for the map method 
// which is added to the Array prototype in JavaScript. 
// The map method creates a new array with the results of calling a provided function on every element in the array.

// Your task is to create a polyfill function called myMap, 
// which should replicate the behavior of the map method. 
// It should take a callback function as an argument and return a new array containing the results of applying the callback function to each element in the original array.


// Examples - 

// const numbers = [1, 2, 3, 4, 5];

// // Example 1:
// const squaredNumbers = numbers.myMap((num) => num * num);
// console.log(squaredNumbers);
// // Output: [1, 4, 9, 16, 25]

// // Example 2:
// const doubledNumbers = numbers.myMap((num) => num * 2);
// console.log(doubledNumbers);
// // Output: [2, 4, 6, 8, 10]








// Hints:

// The polyfill function myMap should be defined as a non-enumerable function on the Array.prototype.
// The myMap function should take a single argument, which is a callback function.
// Inside the myMap function, create an empty array to store the mapped values.
// Use a for loop to iterate over each element in the array and apply the callback function to it.
// Push the result of the callback function into the new array.
// Finally, return the new array.

// Solution Approach:

// Define a new function myMap on the Array.prototype.
// In the myMap function, create an empty array to store the mapped values.
// Iterate over each element in the array using a for loop.
// Apply the callback function to each element and push the result into the new array.
// Return the new array.



// Complete Solution

Array.prototype.myMap = function(callback) {
    const mappedArray = [];
    for (let i = 0; i < this.length; i++) {
      const result = callback(this[i], i, this);
      mappedArray.push(result);
    }
    return mappedArray;
  };


// Test Run

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.myMap((num) => num * num);
console.log(squaredNumbers);
// Output: [1, 4, 9, 16, 25]


  

