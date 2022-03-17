/* 20 string methods */

var stringOne = "Arsenal are the best team in the league"
var stringTwo = " and Manchester are their biggest rivals"
const myPets = ['dog', 'cat', 'fish'];
const values = [1, 2, [7], 3, [1, 2], 4 ]

// charAt()
console.log(stringOne.charAt(5));

// charCodeAt()
console.log(stringOne.charCodeAt(1));

// concat()
console.log(stringOne.concat(stringTwo));

// endsWith()
console.log(stringOne.endsWith("league"));

// fromCharCode()
console.log(String.fromCharCode(116));

// includes()
console.log(stringOne.includes("Arsenal"));

// indexOf()
console.log(stringOne.indexOf("in"));

// lastIndexOf()
console.log(stringOne.lastIndexOf("t"));

// match()
console.log(stringOne.match(/the/g)); // pull out 'the' from the string and places them into an array

// repeat()
console.log(stringOne.repeat(4));

// replace()
console.log(stringOne.replace(/the/g, "THE"));

// search()
console.log(stringOne.search("the"));

// slice()
console.log(stringOne.slice(2, 4));

// split()
console.log(stringOne.split(" "));

// startsWith()
console.log(stringOne.startsWith("Arsenal"));

// table()
const people = [
  { name: "Dean", age: 27 },
  { name: "Aimee", age: 25 },
];
console.table(people);

// substring()
console.log(stringOne.substring(2, 4));

// toLowerCase()
console.log(stringOne.toLowerCase());

// toUpperCase()
console.log(stringOne.toUpperCase());

// trim()
var stringThree = "     hello!     ";
console.log(stringThree.trim());

// join()
console.log(myPets.join(' and '));

// flat 
console.log(values.flat());



