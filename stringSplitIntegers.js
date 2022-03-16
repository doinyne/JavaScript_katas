// best practise 

function digitize(n) {
  return String(n).split('').map(Number);
};

console.log(digitize(12345));

// my solutions

function digitize(n) {
  let arr = n.toString()
  let arr2 = arr.split('');
  let arr3 = arr2.map(Number);
  return arr3;
};

console.log(digitize(12345));