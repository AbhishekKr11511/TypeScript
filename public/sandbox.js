"use strict";
const character = 'Tom';
console.log(character);
let age = 23;
console.log(age);
const canVote = true;
console.log(canVote);
// Function
const addNum = (n1, n2) => {
    return n1 + n2;
};
console.log(addNum(12, 24));
// Array
const arra = [1, 2, 4,];
const arrb = ['a', 'b', 'c'];
const arrc = [3, 'three'];
const arrd = [11, 22, 33];
const arre = ['aa', 'bb', 'cc', 'dd'];
const arrf = [1, 2, 'abhishek', 45, 'a', 22.3, "this is a string"];
let someArr = [123, 'brother', 22, true, false];
console.log(typeof (someArr));
console.log(arra);
console.log(arrb);
console.log(arrc);
console.log(arrd);
console.log(arre);
console.log(arrf);
// Object 
let obj1 = {
    name: 'Abhishek',
    age: 24,
    canVote: true
};
obj1 = {
    name: 'Satyam',
    age: 25,
    canVote: true,
    // You can't add any more properties
};
// Function 
let greet = () => {
    console.log("hello World!");
    return 23;
};
let add = (num1, num2, num3 = 10) => {
    let sum = num1 + num2 + num3;
    return sum.toString();
};
let op = add(5, 15);
console.log(op);
