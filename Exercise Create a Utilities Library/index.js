//improrting my functions
const util = require("./utilities/util1.js");
const utilTwo = require("./utilities/util2.js");

//my arrays
const numArr = [1, 2, 3, 4];
const wordArr = ["one", "two", "three", "four"];

// Add numbers in an array
console.log(util.sum(numArr));

//concat an array
console.log(util.concat(numArr, wordArr));

// Find the largest number in an array
console.log(utilTwo.lgNum(numArr));

// Remove the 3rd item from an array
console.log(utilTwo.cut3(numArr));