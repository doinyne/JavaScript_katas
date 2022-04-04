function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const max = Math.max(...A); // Will find highest number
  const min = Math.min(...A);
  const missing = []
  var numArray = A;
  numArray = numArray.sort(function (a, b) { return a - b });
  for(let i=min; i<= max; i++) {
    if(!A.includes(i)) { // Checking whether i(current value) present in num(argument)
      missing.push(i); // Adding numbers which are not in num(argument) array
    } else if(missing) {
      return max + 1;
    } else if(missing) {
      return min - 1;
    }
  }
  return missing;
}

console.log(solution([−1, −3]));


