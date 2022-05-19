// Knapsack problem interview prep

// a function that takes any number
// starts at 1 and continues to add all the numbers
// together until its added the nth number.

function sumUp(n) {
  let result = 0
  for ( let i = 1; i <= n; i++) {
    result = result + i;
  }
  return result
}

console.log(sumUp(10))

// one liner

function sumUpOneLiner(n) {
  return (n/2) * (1 + n);
}

console.log(sumUpOneLiner(10));

//big O

//linked list
//array
//hash tables
//stacks and queues   
// graphs and trees

