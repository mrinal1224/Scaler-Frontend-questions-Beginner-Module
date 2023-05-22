// 1. Question:

function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log("Hello, " + this.name + "!");
};

var person1 = new Person("John");
person1.sayHello();

var person2 = new Person("Jane");
person2.sayHello();


// What will be the output of the code?

// a) Hello, John!
// b) Hello, Jane!
// c) Error: Cannot access sayHello method.
// d) No output.

// Answer: a) Hello, John!

// Explanation: The code defines a constructor function Person and adds a sayHello method to its prototype. 
// Two instances of Person are created, and the sayHello method is called on each instance. Therefore, 
// the output will be "Hello, John!"







// 2. Question

function Circle(radius) {
    this.radius = radius;
  }
  
  Circle.prototype.getArea = function() {
    return Math.PI * this.radius * this.radius;
  };
  
  var circle = new Circle(5);
  console.log(circle.getArea());


//   What will be the output of the code?

// a) 78.54
// b) 31.42
// c) 25
// d) Error: getArea is not a function.

// Answer: a) 78.54

// Explanation: The code defines a constructor function Circle and adds a getArea method to its prototype. 
// An instance of Circle is created with a radius of 5, and the getArea method is called on that instance. 
// The formula for calculating the area of a circle is used, resulting in an output of 78.54.







// 3. Question


class Car {
    constructor(brand) {
      this.brand = brand;
    }
  
    static getBrand() {
      return this.brand;
    }
  }
  
  console.log(Car.getBrand());

//   What will be the output of the code?

// a) Error: Cannot access brand.
// b) undefined
// c) null
// d) "Car"

// Answer: b) undefined

// Explanation: The code defines a Car class with a static method getBrand. 
// Static methods are called on the class itself, not on instances. 
// However, within the static method, this refers to the class itself, not an instance. 
// Since brand is not defined on the class itself but on instances, 
// this.brand will be undefined when the method is called.



// 4.Question

class Rectangle {
    constructor(length, width) {
      this.length = length;
      this.width = width;
    }
  
    getArea() {
      return this.length * this.width;
    }
  }
  
  var rectangle = new Rectangle(4, 5);
  console.log(rectangle.getArea());



//   What will be the output of the code?

// a) 20
// b) 9
// c) 45
// d) Error: Cannot access getArea method.

// Answer: a) 20

// Explanation: The code defines a Rectangle class with a constructor and a getArea method. 
// An instance of Rectangle is created with a length of 4 and a width of 5. 
// The getArea method is called on that instance, 
// which calculates the area by multiplying the length and width (4 * 5 = 20).

// 5. Question

class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(this.sound);
    }
  }
  
  class Dog extends Animal {
    constructor(name) {
      super(name);
      this.sound = "Woof!";
    }
  }
  
  var dog = new Dog("Buddy");
  dog.speak();

//   What will be the output of the code?

// a) "Woof!"
// b) "Meow!"
// c) undefined
// d) Error: sound is not defined.

// Answer: a) "Woof!"

// Explanation: The code defines an Animal class with a speak method and a Dog class that extends Animal. 
// The Dog class sets the sound property to "Woof!" in its constructor. 
// An instance of Dog is created with the name "Buddy", 
// and the speak method is called, resulting in the output "Woof!".





// question 6

function Shape() {
    this.name = "Shape";
  }
  
  Shape.prototype.getName = function() {
    return this.name;
  };
  
  function Square(side) {
    this.side = side;
  }
  
  Square.prototype = Object.create(Shape.prototype);
  Square.prototype.constructor = Square;
  
  Square.prototype.getArea = function() {
    return this.side * this.side;
  };
  
  var square = new Square(5);
  console.log(square.getName());


//   What will be the output of the code?

// a) "Shape"
// b) "Square"
// c) Error: Cannot access getName method.
// d) Error: getName is not a function.

// Answer: a) "Shape"

// Explanation: The code defines a Shape constructor function and adds a getName method to its prototype. 
// Then, a Square constructor function is defined, 
// which inherits from Shape using Object.create and sets its own constructor. 
// An instance of Square is created with a side length of 5, and the getName method is called on that instance. Since getName is inherited from Shape, 
// the output will be "Shape".


// Question 7

class Vehicle {
    constructor() {
      this.hasEngine = true;
    }
  }
  
  class Car extends Vehicle {
    constructor() {
      super();
      this.numWheels = 4;
    }
  }
  
  var car = new Car();
  console.log(car.hasEngine);

//   What will be the output of the code?

// a) true
// b) false
// c) undefined
// d) Error: Cannot access hasEngine property.

// Answer: a) true

// Explanation: The code defines a Vehicle class with an hasEngine property and a Car class that extends Vehicle. The Car class calls super() in its constructor to invoke the Vehicle constructor and then sets its own numWheels property. An instance of Car is created, and the hasEngine property is accessed, 
// resulting in the output "true"


// Question 8

class BankAccount {
    constructor(balance) {
      this.balance = balance;
    }
  
    deposit(amount) {
      this.balance += amount;
    }
  
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
      }
    }
  }
  
  var account = new BankAccount(1000);
  account.withdraw(500);
  console.log(account.balance);


//   What will be the output of the code?

// a) 500
// b) 1000
// c) 1500
// d) Error: Cannot access balance property.

// Answer: a) 500

// Explanation: The code defines a BankAccount class with a constructor, deposit, and withdraw methods. 
// An instance of BankAccount is created with an initial balance of 1000. 
// The withdraw method is called with an amount of 500, which is subtracted from the balance. 
// Therefore, the output will be 500.


// Question 9


class Animal {
    constructor(name) {
      this.name = name;
    }
  
    makeSound() {
      console.log("Animal sound!");
    }
  }
  
  class Dog extends Animal {
    constructor(name) {
      super(name);
    }
  
    makeSound() {
      console.log("Woof!");
    }
  }
  
  var animal = new Animal("Generic");
  animal.makeSound();

//   What will be the output of the code?

// a) "Animal sound!"
// b) "Woof!"
// c) Error: Cannot access makeSound method.
// d) Error: makeSound is not a function.

// Answer: a) "Animal sound!"

// Explanation: The code defines an Animal class with a makeSound method and a Dog class that extends Animal and overrides the makeSound method. 
// An instance of Animal is created with the name "Generic", and the makeSound method is called on that instance. Since animal is an instance of Animal and not Dog, 
// the makeSound method of the Animal class will be executed, resulting in the output "Animal sound!".


// Question 10

function Vehicle() {
    this.engine = true;
  }
  
  Vehicle.prototype.start = function() {
    console.log("Engine started.");
  };
  
  function Car() {
    Vehicle.call(this);
  }
  
  Car.prototype = Object.create(Vehicle.prototype);
  Car.prototype.constructor = Car;
  
  var car = new Car();
  console.log(car.engine);


//   What will be the output of the code?

// a) true
// b) false
// c) undefined
// d) Error: Cannot access engine property.

// Answer: a) true

// Explanation: The code defines a Vehicle constructor function with an engine property and a start method on its prototype. 
// Then, a Car constructor function is defined, which inherits from Vehicle. 
// An instance of Car is created, and the engine property is accessed, resulting in the output "true". 
// The Car constructor calls Vehicle.call(this) to inherit the engine property.
  

  


  





  



  


