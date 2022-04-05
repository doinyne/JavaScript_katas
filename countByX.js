function countBy(x, n) {
  let z = [];
  for (let i = x; z.length < n; i += x) {
    z.push(i);
  }

  return z;
};

module.exports = countBy 
console.log(countBy(1, 2));