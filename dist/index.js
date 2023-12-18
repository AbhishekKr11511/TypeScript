"use strict";
let sales = 123456789;
let course = "Typescript";
let is_published = true;
console.log(sales);
console.log(course);
console.log(is_published);
let render = (num1, num2) => {
    let sum;
    sum = num1 + num2;
    return sum;
};
console.log(render(23, 37));
let arr1 = [10, 'abhi'];
let arr2 = [1, 2, 3, 4, 5, 'abhishek', 10, 'satyam'];
console.log(arr1);
console.log(arr2);
var Size;
(function (Size) {
    Size["small"] = "s";
    Size["medium"] = "m";
    Size["large"] = "l";
})(Size || (Size = {}));
let mySize = Size.small;
console.log(mySize);
function calculateTax(income) {
    if (income > 1000000) {
        return income * 0.3;
    }
    return income * 0.2;
}
console.log(calculateTax(2000000));
let employee = { id: 101, name: "Abhishek" };
console.log(employee);
employee.id = 142;
employee.name = "Satyam";
employee.age = 25;
console.log(employee);
let inPounds = function (weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
};
console.log(inPounds(10));
console.log(inPounds('20kg'));
