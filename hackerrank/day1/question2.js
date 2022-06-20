function miniMaxSum(arr) {
  let lowestToHighest = arr.sort((a, b) => a - b).reduce((a, b) => a + b, 0);
  let high = arr.pop();
  let low = arr.shift();

  console.log(lowestToHighest - high, lowestToHighest - low)
}


console.log(miniMaxSum([1,2,3,4,5]))


// using four of the five digits
// for the maximum sum of numbers sort into order then remove lowest number then sum all numbers
// for the lowest, remove the highest number after sorting