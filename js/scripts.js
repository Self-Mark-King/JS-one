// // Creating an object w/o a constructor
// let test = {fName:'Mark', lName:'King'};
// console.log(test);

// // adding a property to an object made w/o a constructor
// test.fullName = 'Mark King';
// console.log(test);

// creating an object with a constructor
function myTest(firstName, lastName) {
    this.firstName =  firstName, 
    this.lastName = lastName
};

let myName = new myTest('Mark', 'King');
console.log(myName.lastName);

const pElement = document.getElementById('demo').innerHTML = "this is the element you've been looking for and my first name is: " + myName.firstName;

// example of not being able to add a property  to an object created with a constructor

// myTest.otherName = "Sam";
// console.log(myName.otherName);

// adding a property using prototype
myTest.prototype.otherName = this.otherName;
console.log(myTest);

let addingAPrototype = new myTest('Cody', 'King', 'CODE');
console.log(addingAPrototype.otherName);
addingAPrototype.otherName = "codE";
console.log(addingAPrototype.otherName);


const lastElement = document.getElementById('demo');
lastElement.appendChild('p').innerHTML = addingAPrototype.otherName;
