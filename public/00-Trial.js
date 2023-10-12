"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Variables
let message = 'Hello World!';
let statement = `I just did my first program.
The statement ${message} is what is logged on my console!!😀`;
console.log(message);
console.log(statement);
let n = null;
console.log(n);
let something = 23;
console.log(something);
something = 'Can this be a string?';
console.log(something);
// Arrays
let list1 = [1, 2, 3];
let list2 = ['a', 'b', 'h'];
console.log(list1);
console.log(list2);
let listAny = [1, 2, 'a', true, 5, `what is going on`];
console.log(listAny);
// Here since the element types are defined, therefore that should be followed respectively, 
// And only that many elements should be present
let arrayMixed = ['Abhishek', 24, true];
console.log(arrayMixed);
// : any, can fit any type of value, therefore it can cause errors in the terminal later
// therefore a new type called 'unknown' is used define values of unknown type
// This is called type Assertion
let myVar = 'abhishek';
console.log('myVar 1 :', myVar);
// But also the methods of a particular variable type wont on unknown type
// So we use the (as <variable type>) to tell typescript what we want to do that unknow variable 
myVar = myVar.toUpperCase();
console.log('myVar 2 :', myVar);
// Assigning multiples types to a variable, used pipe character
// It also allows us to have intellisence, for that multi-tyle variable, wherease something like :any, won't have that
let multiType;
multiType = 20;
console.log(multiType);
multiType = false;
console.log(multiType);
// Functions
// ? will identify if this parameter is present or not
function add(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    return num1;
}
let word = add('tom', 'boy');
let word2 = add('brother');
// let sum = add(2, 6)s
console.log(word);
console.log(word2);
