/* 
!   Conditionals
    - Evaluates an expression and responds if it is true
    - Falsy
        - false
        - 0 
        - " ", ' ' (empty strings)
        - null
        - undefined
        - NaN (not a number)
*/

let isOn = true;

//let a = "abc";
//console.log(Number(a));

if(isOn == true) { //if true anything inside this code block will run
    console.log('The light is on!');
}

/* 
    Structure:

    if(expression evaluated) {
        ... code that runs if expression is true.
    }
    
*/


/*let string = "double";
let string2 = 'single';
let string3 = ``*/

if(isOn) {
    console.log('The light is on, yay!');
}

/*let myName = 'Eric';
// console.log(newString);
myName = 'Ethan';
let newString = `My name is ${myName}`;
console.log(newString); */

let newString = `2 + 2 is ${2 + 2}`;
let firstName = "Sam";
let lastName = "Jones";
// let fullName = firstName + " " + lastName;
console.log(`${firstName} ${lastName}`);

isOn = false
if(isOn == false) {
    console.log('The light is off')
}

let wether = 65

if(wether < 70) {
    console.log('Wear a jacket.')
} else {
    console.log('No jacket necessary!') /* if wether is not less than 70 then print */
}
// And, Or, Not

let rain = true;
weather = 68;

if(weather < 70 && rain) {
    console.log('Wear a jacket.');
} else {
    console.log('No jacket necessary!');
}

if(weather > 70 || rain) {
    console.log('Wear a jacket');
} else {
    console.log('no jacket');
}

if(!rain) {
    console.log('Seems to be a clear day');
}

let grade = 88;
grade = 73
grade = 0

if(grade > 75) {
    console.log('passing');
} else if(grade >= 69) {
    console.log('Please see the teacher');
} else { /* anything else is failing no need for if */
    console.log('Failing');
}

//! Switch
/* 
    keywords:
        - switch
        - case
        - break
            - takes us out of or code block
        - default
            - run if no cases match

    Structure:

    switch(expression) {
        case ... :
            return;
            break;
        case ... :
            return;
            break;
        case ... :
            return;
            break;
        default:
            return;
    }
*/

let officeCharacter = "Michael";

switch(officeCharacter) {
    case "Michael":
        console.log("My mind is going a mile an hour.");
        break;
    case "Dwight":
        console.log("Perfectenschlag");
        break;
    case "Jim":
        console.log("Bears. Beets. Battlestar Galactica");
        break;
    case "Pam":
        console.log("Yup");
        break;
    default:
        console.log(`I'm sorry, ${officeCharacter}, but do I know you?`);
}

let num = -40;

/* we get our default because -40 is less than 0 and -10 */

/* less then 0 but greater then -10 */
switch (true) {
    case (num < 0 && num > -10):
        console.log('case 1 ran')
        break;
    case (num > 0):
        console.log('case 2 ran');
        break;
    default:
        console.log('did not work');
        break;
}

let num = 5;

switch (true) {
    case (num < 0 && num > -10):
        console.log('case 1 ran')
        break;
    case (num > 0):
        console.log('case 2 ran');
        break;
    default:
        console.log('did not work');
        break;
}

//! Ternary
/* 
    Always a If/Else condition at minimum.

    Structure:

    expression ? true : false;
*/

let expression = true;
/* expression runs true */
if(expression) {
    console.log('Runs True')
} else {
    console.log("Run")
}

let expression = false;

// if(expression) {
//     console.log('Runs True')
// } else {
//     console.log("Runs False");
// }

expression ? console.log('runs true') : console.log('runs false');
/* straight foward question ? if yes run true or else no */

let newNum = 6;

newNum > 0 ? console.log('yes') : console.log('no');

// as an if/else
if(newNum > 0) {
    console.log('yes');
} else {
    console.log('no');
}

//* Else/If
if(newNum == 0) {
    console.log('Hello');
} else if (newNum < 0) {
    console.log('hi');
} else {
    console.log('goodbye');
}


(newNum == 0) ? console.log('Hello') : (newNum < 0) ? console.log('hi') : console.log('goodbye again');
/* if equel to 0 if else below 0 run hi if anything else run goodbye again */
(newNum == 0) ? 
    console.log('Hello') : 
    (newNum < 0) ? 
    console.log('hi') : 
    console.log('goodbye again');
/* the same written differently ^^^^*/

    /* run quickly */