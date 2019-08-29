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

// // try it out
// let arrayOne = [
//     'star wars',
//     'han solo',
//     'luke skywalker'
// ];
// let arrayTwo = [
//     '2016 election',
//     'clinton',
//     'trump'
// ];
// let arrayThree = [
//     'planet tof the apes', 
//     'heston',
//     'man'
// ];
// let arrayFour = [
//     'top five',
//     'chris rock'
// ];
// let arrayFive = [
//     'movie',
//     'star'
// ];
// let finalArray = [
//     arrayOne, arrayTwo, arrayThree, arrayFour, arrayFive
// ];
// console.log(finalArray);
// alert(finalArray.length);


// // loops
// let x = 10;
// while (x<=10){
//     console.log(x);
//     x++
// }

// for (let i =0; i<20; i++) {
//     console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//     if (i == 4){
//         break;
//     }
//     console.log(i);
// }
// let i = 0;
// do {
//     console.log(i);
//     i++
// } while(i < 10);

// let i = 0;

// let seconeArray =[1,2,3,4,5]
// seconeArray.forEach(function(x)){
//     console.log('i am ' + x);
// }
//  let myString = 'HI'
//  for (i of myString) {
//      console.log(i);
//  } 

 
//  // 
//  let people = [{
//      firstName : 'Mark',
//      lastName : 'King',
//      age : 58,
//  },{
//      firstName : 'Greg',
//      lastName : 'Smith'
//  }];

//  for (i in people){
//      console.log(people[person]);
//  } 
// ---------------- first try
// let thisArray = [];

// var item = [];

// do {
//     let item = [prompt('Enter a to do task.')];
    
//     // let item = new Array(item);
//     thisArray.push(item);
//     console.log(thisArray);
// } while (thisArray.length < 3);
 
// console.log(thisArray[0]);

// // var person = {fname:"John", lname:"Doe", age:25}; 

// // var text = "";
// // var x;
// // for (x in person) {
// //   text += person[x] + " ";
// // }

// for (x in thisArray) {
//     // thisArray.push(prompt('enter a length of time for the task'));
//     thisArray[x].push(prompt('enter a length of time for the task'));
// };

// for (x in thisArray) {
//     let time = x[1];
//     console.log(time);
// };

// console.log(thisArray[2]);
// console.log(thisArray);

let item1 = [];
let item2 = [];
let item3 = [];


item1.push(prompt('enter an item'));
item2.push(prompt('enter an item'));
item3.push(prompt('enter an item'));

// console.log(item1, item2,item3);

let thisArray = [item1,item2,item3];
// console.log(thisArray);

// for (obj in thisArray) {
//     obj.push(prompt('enter a length'));
// }

// thisArray.forEach(function(thisArray)){
//     thisArray.push(prompt('enter a length'));
// }

item1.push(Number(prompt(`enter a length for ${item1}`)));
item2.push(Number(prompt(`enter a length for ${item2}`)));
item3.push(Number(prompt(`enter a length for ${item3}`)));

console.log(`item 1 ${item1}`);
console.log(`item 2 ${item2}`);
console.log(`item 3 ${item3}`);

// let longest = item1[1];
// console.log(typeof(longest));

// while (longest < item2 || item3){

// }
let longest = 0
if (longest < item1[1]){
    longest = item1[1];
    item1.push('easy peasy');
}
if (longest < item2[1]){
    longest = item2[1];
    item2.push('easy peasy');
}
if (longest < item3[1]) {
    longest = item3[1];
}

console.log(`the longest item is ${longest}`);
alert(`${item1[0]},${item2[0]}`);







