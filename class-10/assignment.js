// Assignment Question:

// You are given an array of numbers. You need to create a program that uses Map, Filter, and Reduce functions to perform certain operations on the array, and return the final result.

// Problem Description:

// You are given an array of numbers. You need to perform the following operations on this array:

// Double all the numbers in the array.
// Filter out all the numbers that are less than 10.
// Sum up all the remaining numbers in the array.

// Hints:

// Use Map to double all the numbers in the array.
// Use Filter to remove all the numbers that are less than 10.
// Use Reduce to sum up all the remaining numbers in the array.

// Solution Approach:

// Use the Map function to double all the numbers in the array.
// Use the Filter function to remove all the numbers that are less than 10.
// Use the Reduce function to sum up all the remaining numbers in the array.
// Return the final result.


// Complete Solution:

function doubleAndSum(arr) {
    return arr
      .map(num => num * 2)
      .filter(num => num >= 10)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
  

// Test Cases
console.log(doubleAndSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 90
console.log(doubleAndSum([5, 10, 15, 20, 25])); // 150
console.log(doubleAndSum([2, 4, 6, 8])); // 28
console.log(doubleAndSum([1, 3, 5, 7, 9])); // 42
console.log(doubleAndSum([0, 1])); // 0

