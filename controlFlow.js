/*
/ Scope will covered more thoroughly shortly, but in order to talk about code blocks... 
/ Scope defines where variables and functionality can be accessed 
*/

/*
/ Code Blocks
*/
// These describe chunks of code that are within the same scope
// Usually delimited by a pair of curly braces {}
// Usually combined with other JS functionality like conditionals or functions or loops

// because the variables below are created at the top level of the script, they are valid at all levels of the script
let x = 10;
let y = 5;
// console.log("x is:", x, "y is:", y);
// let z = x + y;

{
    // if i declare z in here, it is only valid in here, and out of the {}
    // it does not exist
    let z = x + y;
    // console.log("x is:", x, "y is:", y);
    // console.log("z is:", z);
}

// console.log("x is:", x, "y is:", y);
// you get the error that z is not defined because it was only valid in {}
// console.log("z is:", z);

/*
/   =============== Scope ===============
/   Global Scope - valid everywhere - (so if you use var instead of let) - 
/       but we want to avoid this because it creates the potential for unintentionally overwriting things
/   Module Scope - we'll learn more about this later
/   Function Scope - we'll talk about this when we learn about functions (soon)
/   Block Scope - valid only within the BLOCK OF CODE that it was created in {}
*/

// This code from the notes was modified from mdn coee that can be found here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
// note that I had change the variable name from x to ex becaue I have already declared a variable called x
// look at at error that you get if you keep that x variable name

// {
//     var ex = 1;
//     {
//         var ex = 2;
//         console.log(ex);
//     }
//     console.log(ex);
// }

// console.log('-----------------------------------');

// {
//     let ex = 1;
//     {
//         let ex = 2;
//         console.log(ex);
//     }
//     console.log(ex);
// }

console.log('-----------------------------------');
// console.log(ex)

/*
/ Control Flow and Conditionals
/ 
*/
// if () {}
// if () {} else {}
// what is the difference?
// remember = is assignment and == or === are both checking for equality
// you do NOT need the {} if there is only one line, BUT you DO need them any time there is more than one line
// it can also help with readability as you are learning to use {}
// x = 10;
// console.log('if but not else');
// if (x==10) {
//     console.log('x is 10');
//     // this only prints if x is 10
// }
// console.log('i always print');

// console.log('************************');

// console.log('if with else');
// if (x==10) {
//     console.log('x is 10');
//     // this only prints if x is 10
// } else {
//     console.log('i only print if x is NOT 10');
// }
// console.log('i always print')

// console.log('************************');

// let isRaining = true;
// if (isRaining) {
//     console.log('i am bringing my umbrella')
// }

// let age = 16;
// if (age >= 15) {
//     console.log('you are old enough to have a drivers license' )
// } else {
//     console.log('you are NOT old enough to have a drivers license')
// }

/*
/ "Truthy" and "Falsy"
/   https://developer.mozilla.org/en-US/docs/Glossary/Truthy
/   https://developer.mozilla.org/en-US/docs/Glossary/Falsy
/   https://www.w3schools.com/js/js_booleans.asp
*/
// Why would I want to use this?

// To check if my variable exists and is initialized
// let newVar;
// if (newVar) {
//     console.log('do things with newVar');
// } else {
//     console.log('this is not defined and initialized - there is no value')
// }

// newVar = 10;
// if (newVar) {
//     console.log('do things with newVar');
// } else {
//     console.log('this is not defined and initialized - there is no value')
// }

/*
/   Nested if/else
/
*/
// Nesting
let hungry = true, hasGroceries = true;
if (hungry) {
    console.log('i should eat');
    if (hasGroceries) {
        console.log('make food');
    } else {
        console.log('buy food');
    }
} else {
    console.log("i won't eat right now");
}

// Chaining
// order matters
let temp = 0;
if (temp >= 100) {
    console.log('temp is at least boiling');
} else if (temp >= 50) {
    console.log('temp is hot');
} else if (temp >= 25) {
    console.log('temp is warm');
} else if (temp >0) {
    console.log('temp is above freezing');
} else {
    console.log('temp is freezing');
}

// one way that we use mod is to see if things are odd or even
let numCheck = 5;
if (numCheck % 2 === 0) {
    console.log('is even');
} else {
    console.log('is odd');
}

let testAge = 5;
// list categories: small child, child(5), teenager(13), i can drive (16), adult (18)
if (testAge >= 18) {
    console.log('you are an adult');
} else if (testAge >= 16) {
    console.log('you can drive');
} else if (testAge >=13) {
    console.log('you are a teenager');
} else if (testAge > 5) {
    console.log('you are a child');
} else {
    console.log('you are a small child');
}