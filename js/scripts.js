// // const greeting = "hello";
// // if (greeting === "hi") {
// //     console.log('yes is matches');
// //     } else if(greeting === "hello"){
// //         console.log('this matches to hello');
// //     }

// let myArray = [
//     'Edward Scissorhands',
//     7,
//     false,
//     '1979',
// ];
// console.log(myArray.length);
// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[2]);
// console.log(myArray[3]);

// // check if array
// console.log(Array.isArray(myArray));

// // add to an array at end
// myArray.push('i like watttttterr buffelows');
// console.log(myArray.length);

// // add to the beginning of an array
// myArray.unshift('im number one');
// console.log(myArray[0]);

// // remove last/first element of an  array
// myArray.pop();
// console.log(myArray);
// myArray.shift();
// console.log(myArray);

// // remove/replace specific element
// myArray.splice(1,1,5); // first param is position, second 1 =want to add 0= add prior to position third param = content to replace with
// console.log(myArray);

// // change an array - takes out a piece of an array - SLICE - creates new array
// // array.slice(begin pos, end pos)
// // myArray.slice(1);
// console.log(myArray.slice(1)); // must call under a new var because it creates a new array

// // // indexof - finds the index of an aitem
// // console.log(myArray.indexOf(5));
// // console.log(myArray);
// // let findPos = newArray

// try it out
let arrayOne = [
    'star wars',
    'han solo',
    'luke skywalker'
];
let arrayTwo = [
    '2016 election',
    'clinton',
    'trump'
];
let arrayThree = [
    'planet tof the apes', 
    'heston',
    'man'
];
let arrayFour = [
    'top five',
    'chris rock'
];
let arrayFive = [
    'movie',
    'star'
];
let finalArray = [
    arrayOne, arrayTwo, arrayThree, arrayFour, arrayFive
];
console.log(finalArray);
alert(finalArray.length);









