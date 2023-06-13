//Question 1

function outer() {
    var x = 10;
    function inner() {
      console.log(x);
    }
    return inner;
  }
  
  var closureFunc = outer();
  closureFunc();


//Which value will be printed to the console?
// A) 10
// B) undefined
// C) Error
// D) 0

// Correct Answer: A) 10

// Explanation: In this example, inner function forms a closure over the variable x declared in the outer function. When closureFunc is invoked, it accesses and prints the value of x, which is 10.

// Question 2

function multiplyBy(num) {
    return function(x) {
      return num * x;
    }
  }
  
  var multiplyByTwo = multiplyBy(2);
  var result = multiplyByTwo(5);
  
  console.log(result);

// What will be the value printed to the console?
// A) 5
// B) 10
// C) 25
// D) 2

// Correct Answer: B) 10

// Explanation: The multiplyBy function implements currying by returning a new function that multiplies its argument by the num value. In this case, multiplyByTwo is a function that multiplies its argument by 2. Therefore, when multiplyByTwo(5) is called, it returns 10.

// Question 3:

function add(x) {
    return function(y) {
      return function(z) {
        return x + y + z;
      }
    }
  }
  
  var result = add(2)(3)(4);
  
  console.log(result);

//   What will be the value printed to the console?
// A) 9
// B) 10
// C) 11
// D) 24

// Correct Answer: C) 11

// Explanation: The add function demonstrates partial function application by returning a series of nested functions. Each function takes an argument and returns a new function until all arguments are collected. In this case, add(2)(3)(4) returns 2 + 3 + 4, which equals 11.


// Question 4:

function outer() {
    var x = 10;
    function inner() {
      console.log(x);
    }
    x = 20;
    return inner;
  }
  
  var closureFunc = outer();
  closureFunc();

//   What value will be printed to the console?
// A) 10
// B) 20
// C) undefined
// D) Error

// Correct Answer: B) 20

// Explanation: Closures capture variables by reference. In this example, inner function forms a closure over the variable x declared in the outer function. Before returning the inner function, the value of x is updated to 20. When closureFunc is invoked, it accesses and prints the updated value of x, which is 20.



// Question 5

function multiplyBy(num) {
    return function(x) {
      return num * x;
      var num = 2;
    }
  }
  
  var multiplyByTwo = multiplyBy(2);
  var result = multiplyByTwo(5);
  
  console.log(result);

//   What will be the value printed to the console?
// A) 5
// B) 10
// C) undefined
// D) Error

// Correct Answer: D) Error

// Explanation: In JavaScript, variables declared with var are hoisted to the top of their scope, but only the declaration, not the assignment. In this example, the variable num is assigned a value of 2 after the return statement. Therefore, an error will occur when trying to access num in the returned function.

// Question-6

function add(x) {
    return function(y) {
      return function(z) {
        return x + y + z;
      }
    }
  }
  
  var result = add(2, 3)(4);
  
  console.log(result);

//   What will be the value printed to the console?
// A) 9
// B) 10
// C) 11
// D) Error

// Correct Answer: D) Error

// Explanation: The add function uses currying to accept multiple arguments, but it requires separate function invocations for each argument. In this example, add(2, 3) would return a function, but calling (4) immediately after would cause an error because it is not a function.


// Question 7
function outer(x) {
    return function(y) {
      return function(z) {
        return x + y + z;
      }
    }
  }
  
  var result = outer(2)(3)(4);
  
  console.log(result);

//   What will be the value printed to the console?
// A) 9
// B) 10
// C) 11
// D) 24

// Correct Answer: C) 11

// Explanation: The outer function accepts a single argument x and returns a series of nested functions using currying. In this case, outer(2)(3)(4) returns 2 + 3 + 4, which equals 11.
  

// Question 8

function multiplyBy(num) {
    return function(x) {
      return num * x;
    }
  }
  
  var multiplyByTwo = multiplyBy(2);
  var multiplyByThree = multiplyBy(3);
  var result = multiplyByTwo(multiplyByThree(4));
  
  console.log(result);

// What will be the value printed to the console?
// A) 8
// B) 12
// C) 24
// D) 40

// Correct Answer: C) 24

// Explanation: In this example, multiplyByTwo and multiplyByThree are curried functions that multiply their argument by 2 and 3, respectively. multiplyByThree(4) returns 12, which is then passed as an argument to multiplyByTwo. Thus, the final result is 2 * 12, which equals 24.


// Question 9

function outer() {
    var x = 10;
    function inner() {
      console.log(x);
      var x = 20;
    }
    return inner;
  }
  
  var closureFunc = outer();
  closureFunc();
  
//   What value will be printed to the console?
//   A) 10
//   B) 20
//   C) undefined
//   D) Error
  
//   Correct Answer: C) undefined
  
//   Explanation: In JavaScript, variable declarations are hoisted to the top of their scope, but not their assignments. In this example, the variable x is hoisted, but its value is not yet assigned when console.log(x) is called. Therefore, x is undefined at that point.  

// Question 10

function add(x) {
    return function(y) {
      return function(z) {
        return x + y + z;
      }
    }
  }
  
  var result = add(2)(3, 4);
  
  console.log(result);

//   What will be the value printed to the console?
// A) 9
// B) 10
// C) 11
// D) Error

// Correct Answer: D) Error

// Explanation: The add function uses currying to accept multiple arguments, but it requires separate function invocations for each argument. In this example, add(2)(3, 4) would cause an error because it expects only one argument at each function invocation.
  
  