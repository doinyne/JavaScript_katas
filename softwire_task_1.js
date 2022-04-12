/*
Write a function that accepts a string and returns an integer value representing the number of distinct duplicated characters within the string, i.e. the number of characters that appear twice or more.

Your solution should be able to deal with all alphanumeric and special characters. Your solution should also also treat upper and lower case characters as distinct characters.

For example:

Given "Aasdefsgh!!!" the expected result would be '2' ('s' and '!' are duplicated)

[execution time limit] 4 seconds (js)

[input] string input

The string to evaluate

[output] integer

The number of duplicated characters
*/


function solution(input) {
  let counts = {};
  arr = input.split("")
  arr.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
  let array_values = arr;

  for(var key in counts) {
    array_values.push(counts[key]);
  }
  let value = array_values.toString();
  const noLetters = value.replace(/\D/g, '');
  
  str = noLetters.split("")

  dub = str.filter(function(x){return x>1}).length
  
  return dub
}
console.log(solution("Aasdefsgh!!!"))