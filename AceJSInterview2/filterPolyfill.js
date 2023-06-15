// Write a coding Question on implementing a polyfill for filter method of javascript added to the Array Prototype with problem description , Examples , hints , solution Approach and the complete solution , also generate test cases



// Problem Description: Polyfill for the filter Method

// Implement a polyfill for the filter method, 
// which is added to the Array prototype in JavaScript. 
// The filter method creates a new array with all elements that pass the test implemented by the provided function.

// Your task is to create a polyfill function called myFilter, 
// which should replicate the behavior of the filter method. 
// It should take a callback function as an argument and return a new array containing only the elements from the original array 
// for which the callback function returns true.



// Examples->

// const numbers = [1, 2, 3, 4, 5];

// // Example 1:
// const evenNumbers = numbers.myFilter((num) => num % 2 === 0);
// console.log(evenNumbers);
// // Output: [2, 4]

// // Example 2:
// const smallNumbers = numbers.myFilter((num) => num < 4);
// console.log(smallNumbers);
// // Output: [1, 2, 3]



// Hints:

// The polyfill function myFilter should be defined as a non-enumerable function on the Array.prototype.
// The myFilter function should take a single argument, which is a callback function.
// Inside the myFilter function, create an empty array to store the filtered values.
// Use a for loop to iterate over each element in the array and apply the callback function to it.
// If the callback function returns true for an element, push it into the new array.
// Finally, return the new array.



// Solution Approach:

// Define a new function myFilter on the Array.prototype.
// In the myFilter function, create an empty array to store the filtered values.
// Iterate over each element in the array using a for loop.
// Apply the callback function to each element and check if it returns true.
// If the callback function returns true, push the element into the new array.
// Return the new array.

// Solution -

Array.prototype.myFilter = function(callback) {
    const filteredArray = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        filteredArray.push(this[i]);
      }
    }
    return filteredArray;
  };

//   Test Run-

   const numbers = [1, 2, 3, 4, 5];
   const evenNumbers = numbers.myFilter((num) => num % 2 === 0);
   console.log(evenNumbers);
// Output: [2, 4]


