/* 
Write a function that accepts a string and returns the second highest numerical digit in the input as an integer.

The following rules should apply:

Inputs with no numerical digits should return -1
Inputs with only one numerical digit should return -1
Non-numeric characters should be ignored
Each numerical input should be treated individually, meaning in the event of a joint highest digit then the second highest digit will also be the highest digit
For example:

"abc:1231234" returns 3
"123123" returns 3
[execution time limit] 4 seconds (js)

[input] string input

The input string

[output] integer

The second-highest digit
*/


function solution(input) {
  arr = input.split("")
  inOrder = arr.sort((a, b) => a - b);
  inOrder.pop();
  last = inOrder[inOrder.length - 1];
  last.replace(/""/g, '')
  return last;
}

console.log(solution("abc:1234567"))