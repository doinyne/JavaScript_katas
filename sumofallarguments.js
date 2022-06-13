function sum() {
  let arr = sum.toString();
  console.log(arr);

  const total = arr.reduce((accumulator, currentValue) => {
    accumulator + currentValue;
  }, 0)
  return total
}

console.log(sum(5, 7, 9))