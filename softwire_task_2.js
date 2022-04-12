function solution(input) {
  arr = input.split("")
  inOrder = arr.sort((a, b) => a - b);
  inOrder.pop();
  last = inOrder[inOrder.length - 1];
  last.replace(/""/g, '')
  return last;
}

console.log(solution("abc:1234567"))