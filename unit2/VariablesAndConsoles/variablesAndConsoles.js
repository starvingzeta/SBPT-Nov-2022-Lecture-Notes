/* 
    var
    let
    const
        -variables that hold data - doesnt change
    (or none)
*/

let a = 2;
    /* a can be anything that we want it to be and we are letting it know to hold the intejer 2 */
let streetAddress = '123 main street';

let     b   =   1;
//1     2   3   4

/* 
    1. JavaScript Keyword to denote the creation of a variable
    2. The name of the variable
        - Developers refer to in order to grab the value stored.
    3. Assignment operatot
    4. The initial value.
*/

// Variable Decleration
let x;
/* created a variable with no value */

//Variable Initialization
let y = 10; // Anything on the right side of the assignment operator (=)

// Assigning to Other Variables
let first = 'John';
let last = 'Smith';

let full = first + last;

console.log('Declaration:', x);
/* Because x has no variable, the console reads it as undefined */

x = 10; //assigning our variable
console.log('Initialization 1: ', x);

x = 33; // reassigning th evalue of our variable.
console.log('Initialization 2: ', x);

let hi = 'Hello';
console.log('Both: ', x, hi);

//const = 'new' in ES6: declare variables meant to remain unchanged.

let today = 'Great!';
const javaScript = 'Wonderful';
console.log(today, javaScript);

today = 'Lovely!';
console.log(today,javaScript);

javaScript = 'Super'; //When we try to reassign a const variable - Typer Error
console.log(today, javaScript);

console.warn('This is a warning');

let warning = 'Uh oh';
console.warn('warn: ', warning);

let err = "this looks real bad...";
console.error("error: ", err);

