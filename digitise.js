function digitize(n) {
  let arr = n.toString()
  let arr2 = arr.split('');
  let arr3 = arr2.map(Number);
  return arr3;
};

console.log(digitize(123092304))