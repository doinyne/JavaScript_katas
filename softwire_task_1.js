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