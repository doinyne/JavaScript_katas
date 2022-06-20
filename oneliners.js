var array = ["A", "B", "C", "D", "B", "B"]

// REMOVE ONLY THE FIRST
console.log(array.splice(array.indexOf('B'), 1));

console.log(array.splice(array.lastIndexOf('B'), 1));