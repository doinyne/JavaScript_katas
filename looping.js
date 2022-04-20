// let sandwiches = ['turkey', 'tuna', 'ham', 'pb&j'];
// let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for ( let i = 0; i < sandwiches.length; i++ ) {
//   console.log(sandwiches[i]) // returns names
//   console.log(i) // returns index positions
// }

// make it working within a function 

function solution(arr) {
  for ( let i = 0; i < arr.length; i++ ) {
    console.log(arr[i])
  }
}

console.log(solution(['turkey', 'tuna', 'ham', 'pb&j']));