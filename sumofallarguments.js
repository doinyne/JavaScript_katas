function sum() {
  let total = 0;

  for (let i = 0; i < arguments.length; i++) {
     total += arguments[i];
  }
  return total
}

console.log(sum(5, 7, 9))