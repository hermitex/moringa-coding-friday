// Description
// Primitives and Objects => Arrays
// array allows you to store collection of items which of different data types
// under one variable

// example
// let myArray = [
//   1,
//   2,
//   3,
//   "Cat",
//   "Trousers",
//   function () {
//     return "I am happy";
//   },
//   { name: "Anjette" },
//   ['football']
// ];

// let myArray = [1, 2, 3, 5];

// Properties
// 1. length => all instance of array will have the length property
// let length = myArray.length;

// Methods => Instantance methods
// 1. at()
// let numberAtIndex = myArray.at(2);

// 2. concat

// let smallArray = [-1, -2, "Dog", function(){return "Home"}]

// let result = myArray.concat(smallArray, "Cat", function(){return "Home"})


// let myArray = [1, 2, 3, 5];

// 3. every() => returns a Boolean true/false depending on the condition

// let testingCondition = (num) => num > 6;

// let result = myArray.every(testingCondition);

// let result = myArray.every((num) => num > 6);

// 4. fill()

// let myArray = [1, 2, 3, 5, 6];

// let result = myArray.fill('WatMan', 1, myArray.length);

// let myArray = [1, 2, 3, 5, 6];

// 5. filter
// let result = myArray.filter((num) => num % 2 === 0);
// let testingCondition = (num) => num % 2 === 0;
// let result = myArray.filter(testingCondition);

// let myArray = [1, 2, 2, 3, 5, 6];
// 6. findIndex()

// let result = myArray.findIndex(num=>num % 2 === 0);

// 7. forEach()

// let myArray = [1, 2, 2, 3, 5, 6];

// myArray.forEach((num, i) => {
//     console.log(`The number at index_${i} = ${num}`); 
// })

// 7. map()
// let myArray = [1, 2, 2, 3, 5, 6];

// let result = myArray.map((num) => num * 2);

// 8. pop()
// let myArray = [1, 2, 2, 3, 5, 6];

// myArray.pop(); // remove 6
// myArray.pop(); // remove 5
// myArray.pop(); // remove 3

// for (let index = myArray.length-1; index >= 3; index--) {
//     myArray.pop();
// }

// console.log(myArray);
// => [1, 2, 2]


// 9. push()
// let myArray = [ 5, 6];

// myArray.concat(['Goat']);

// 10. push()
// let myArray = [200.50, 200, 350, 500, 1500, 50];

// const addMoney = (a, b) =>  a+=b;


// let result = myArray.reduce(addMoney)

// let result = myArray

// 11. push()
let myArray = [200.50, 200, 350, 500, 1500, 50];

let number = 1234; // '1234'

let num = number+"";

let numArray = [];

for(str of num){
   numArray.push(str);
}

 let result =  +numArray.reverse().join('');

console.log(result)

