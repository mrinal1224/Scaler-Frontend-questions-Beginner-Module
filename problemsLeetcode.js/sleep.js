// Given a positive integer millis, write an asyncronous function that sleeps for millis milliseconds. It can resolve any value.

 

// Example 1:

// Input: millis = 100
// Output: 100
// Explanation: It should return a promise that resolves after 100ms.
// let t = Date.now();
// sleep(100).then(() => {
//   console.log(Date.now() - t); // 100
// });
// Example 2:

// Input: millis = 200
// Output: 200
// Explanation: It should return a promise that resolves after 200ms.
 

// Constraints:

// 1 <= millis <= 1000


/**
 * @param {number} millis
 */
 async function sleep(millis) {
    return new Promise((delayresolve, reject) => {
  if (typeof millis !== 'number' || isNaN(millis)) {
    reject(new Error('Invalid argument. Expected a number.'));
  } else {
    setTimeout(delayresolve, millis);
  }
});
}


let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t)) // 100



