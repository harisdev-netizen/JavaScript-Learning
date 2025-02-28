/*

// Variable is basically a box, in which we can store a value, so we give that box a name, and then later in the code we can reference that variable name over and over again.

// In below examples 'firstName', 'x', 'y' and 'z' are called variables, and here we have named the variables a 'firstName', 'x', 'y', 'z'.
let firstName = 'Haris';
console.log(firstName);

let x = 5 + 3;
console.log(x);

let y = 4;
let z = 3;
let result = y + z;
console.log(result);

// We should always give a useful and understandable names to our variables for example:
let myFirstJob = 'Teacher';
let mySecondJob = 'Frontend Developer';

console.log(myFirstJob);
console.log(mySecondJob);

// TASK
let country = 'Pakistan';
let continent = 'South Asia';
let population = 257047044;

console.log(country);
console.log(continent);
console.log(population);

// THE 7 PRIMITIVE DATA TYPES:

// 1. Number: Floating point numbers, used for decimals and integers
let age = 24;
console.log(typeof age);

// 2. String: Sequence of Characters, used for text
let secondName = 'Haris';
console.log(typeof secondName);

// 3. Boolean: Logical type that can only be used "true" and "false", used for taking decisons.
let javascriptIsFun = true;
console.log(javascriptIsFun);

// 4. Undefined: Value taken by a variable that is not yet defined ('empty value')
let year;
console.log(year);
console.log(typeof year);
// 5. Null: Also means ('empty value')
// 6. Symbol (ES2015): Value that is unique and cannot be changed.
// 7. BigInt (ES2022): Larger integers than the 'Number' type can hold.

*/


/* ---------------
  LET, CONST, VAR
---------------- */
/*
let age = 24;
age = 25;

// const is assigned to variables whoch are not going to change at any point in the future.
const birthYear = 2001;
// birthYear = 2000;

var job = "Programmer";
job = "Web Developer";
console.log(job);
*/

/* -------------------
  Operator Precedence
-------------------- */

// Math Operators
const now = 2030;
const ageHaris = now - 2001;
const ageMarie = now - 2002;
console.log(ageHaris, ageMarie);

const firstName = 'Haris';
const lastName = 'Muhammad';
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 8;
x += 10;  // x = x + 10
x *= 3;   // x = x * 3
x++;      // x = x + 1
x--;      // x = x - 1;
x--;      // x = x - 1;
console.log(x);

// Comparison Operators
