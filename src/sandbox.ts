const character:string = 'Tom'

console.log(character);

let age: number = 23

console.log(age);

const canVote:boolean  = true

console.log(canVote);

// Function
const addNum = (n1:number, n2:number) => {
    return n1+n2
}
console.log(addNum(12, 24));

// Array
const arra : number[] = [1, 2, 4,]
const arrb : string[] = ['a', 'b', 'c']
const arrc : [number, string] = [3, 'three']
const arrd : number[] | string[] = [11, 22, 33]
const arre : number[] | string[] = ['aa', 'bb', 'cc', 'dd']
const arrf : (number | string)[] = [1, 2, 'abhishek', 45, 'a', 22.3, "this is a string"]

let someArr = [123, 'brother', 22, true, false]

console.log(typeof(someArr));

console.log(arra);
console.log(arrb);
console.log(arrc);
console.log(arrd);
console.log(arre);
console.log(arrf);

// Object 

let obj1 = {
    name : 'Abhishek',
    age : 24,
    canVote : true
}

obj1 = {
    name : 'Satyam',
    age : 25,
    canVote: true,
    // You can't add any more properties
}


// Function 

let greet = () => {
    console.log("hello World!"); 
    return 23
}

let add = (num1 : number, num2 : number , num3: number = 10): string => {
    let sum = num1 + num2 + num3
    return sum.toString()
}

let op = add(5, 15)
console.log(op);
