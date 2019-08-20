// .........................................
// IN class exercise 1
// .............................................


// let anyString = "what String";
// new String("whatString");
// if (anyString == "whatString"){
//     console.log('strings are equal');
// }   else{
//     console.log('the strings are NOT equal')
// }

// let txt = "some text";
// let len = txt.length;
// console.log(`the length is:  ${len}`);


// numberUno = prompt('please enter a number', 10);
// numberDos = prompt('please eneter a second number', 10);
// numberUno = Number(numberUno);
// numberDos = Number(numberDos);
// alert(numberUno + numberDos);

// ..............................

// ..............................
// in class exercise 2
// .................................

// let oneEight = confirm('Are you 18 or over?');  
// //  if (oneEight == false){
// //      alert('git outa here kid');
// //  }

// function mayContinue(oneEight){
//     return(oneEight ? eighty() : alert('Your NOT 18!'));
// }
// mayContinue(oneEight);


// function eighty(eightZero){
//     eightZero = confirm('Are you bewteen 18 and 80 years old?');
//     return(eightZero ? confirm('do you like Star Wars?') : confirm('Do you like plums?'));
// }

// .............

// ...........................................
// Day Three take home
// ...........................................
// let name = prompt("Wat's your name");
// let color = prompt("Choose your favourite color: Green, Red, Orange, Yellow, Blue, Pink, Purple, Black, White, Grey");

// // if (typeof color != "string") {
// //     alert('Enter a String MORON!');
// // } else {
// //     alert('message');
// // }

// if (color = 'Red'||'Green'||'Orange'||'Yellow'||'Blue'||'Pink'||'Purple'||'Black'||'White'||'Grey'){
    
// } else  {
//     alert('Enter a color!');
// }


// switch(color) {
//     case color = 'Red':
//         alert(`${name}: Your Favorite color is ${color}`);
//         break;
//     case color = 'Green':
//             alert(`${name}: Your Favorite color is ${color}`);
//             break;    
//     case color = 'Orange':
//             alert(`${name}: Your Favorite color is ${color}`);
//             break;
//     case color = 'Yellow':
//             alert(`${name}: Your Favorite color is ${color}`);
//             break;
//     case color = 'Blue':
//             alert(`${name}: Your Favorite color is ${color}`);
//             break;
//     case color = 'Blue':
//             alert(`${name}: Your Favorite color is ${color}`);
//             break;
//     case color = 'Pink':
//             alert(`${name}: Your Favorite color is ${color}`);
//             break;
//     case color = 'Purple':
//             alert(`${name}: Your Favorite color is ${color}`);
//             break;
//     case color = 'Black':
//         alert(`${name}: Your Favorite color is ${color}`);
//         break;
//     case color = 'White':
//         alert(`${name}: Your Favorite color is ${color}`);
//         break;
//     case color = 'Grey':
//         alert(`${name}: your Favorite color is ${color}`);
//         break;

// }

// ${name}

// ............................................

// .............................................
// class
// .............................................................

// const exampleString = 'iam a string';
// const exampleObject = new String('ima a object');
// const anotherString  = 'iam a string';


const h1 = document.getElementById('greeting');
// // console.log(h1);
// if (exampleString === anotherString){
//     console.log('yes equeal');
// } else{
//     console.log('sorry');
// };

// function checkExamples() {


// };

// checkExamples();

// .........................................
// const luckyNumber = 7;
// if (luckyNumber < 5 || luckyNumber > 1){
//     console.log('not lucky');
// } else {
//     console.log('lucky');
// };

// ......................................................
// operators
// .............................................

// let a = 10;
// // let b = 2;

// let result = 0;
// result++;

// console.log(result);
// .............................
// let testModello = 5 % 10;
// console.log(testModello);
 
// let testNan = isNaN('hello');
// console.log(testNan);

// ..................................
// NaN
// ......
// let valueNan = 'iam indeed nana';
// let testNan = isNaN(valueNan);

// testNan ? console.log('true'):console.log('false');

// .............................
// switch
// .........................................
const askColor = prompt('pick a color: red, blue, orange,yellow, green, pink, purple, black, white, grey')
switch(askColor){
    case 'red':
        h1.innerHTML = `you chose  ${askColor}`;
    break;
    case 'blue':
            h1.innerHTML = `you chose  ${askColor}`;
    break;
    case 'orange':
            h1.innerHTML = `you chose  ${askColor}`;
    break;
    case 'yellow':
        h1.innerHTML = `you chose  ${askColor}`;
    break;
    case 'green':
        h1.innerHTML = `you chose  ${askColor}`;
    break;
    case 'pink':
        h1.innerHTML = `you chose  ${askColor}`;
    break;
    case 'purple':
        h1.innerHTML = `you chose  ${askColor}`;
    break;
    case 'black':
        h1.innerHTML = `you chose  ${askColor}`;
    break;
    case 'white':
        h1.innerHTML = `you chose  ${askColor}`;
    break;
    case 'grey':
        h1.innerHTML = `you chose  ${askColor}`;
    break;
    default:
            h1.innerHTML = `you did not follow the rules`;
}

// ..............................
// fini 
// .....................................

