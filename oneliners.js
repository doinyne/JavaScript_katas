var array = ["A", "B", "C", "D", "B", "B"]

// REMOVE ONLY THE FIRST
console.log(array.splice(array.indexOf('B'), 1));

// REMOVE ONLY THE LAST 
console.log(array.splice(array.lastIndexOf('B'), 1));

// REMOVE ALL OCCURENCES
console.log(array = array.filter(v => v !== 'B'));