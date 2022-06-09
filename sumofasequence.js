const sequenceSum = (begin, end, step) => {
  if (begin > end) return 0;
  let sum = 0;

  for (let num = begin; num <= end; num += step) {
    sum += num;
  }
  return sum;
};

console.log(sequenceSum(2, 6, 2))