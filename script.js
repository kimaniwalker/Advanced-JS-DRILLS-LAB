// Set the word name equal to your name
name = 'kimani';

// Use the var keyword to define name as a variable
//var name;

// Log the value of name to the console
//console.log(name);

// Change the var keyword to let
//let name;

// Change the var keyword to let
//var name;

//Change the let keyword back to var and create a function named setName
/*
var name;

 function setName() {
    ;
}
*/

// Inside the setName function write the following code and then call it BEFORE the function is declared
/*
setName();
function setName() {
    var name = 'Kimani';
    console.log(name);
} 
*/

//Create a new function declaration that will accept two parameters. The value of the parameters will be used to determined the average and the result will be returned.
// Add console logs to monitor each stage.
console.log('This is my avg variable');
let avg = findAvg(2, 2);

console.log('This is the result', avg);
function findAvg(a,b) {
    console.log('beginning of my function');
    var answer = ( a + b ) / 2 ;
    return answer;
}

// Create an array called fruits
//The fruits array should have three fruits
let fruits = ['apple','orange','grape'];

// Declare a global variable named favFruit using the let keyword.
let favFruit ;

// Create a function declaration that will print the first fruit in the fruits array

printFruits();

function printFruits() {
     favFruit = (fruits[2]);
    console.log(fruits[0]);
}


// Declare another function that will print your favorite fruit.


function printFruits2() {
    console.log(favFruit);
}


//Call the function

printFruits2();