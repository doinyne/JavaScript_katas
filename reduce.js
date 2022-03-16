function sum(array) {
  const total = array.reduce((currentTotal, numbers) => {
    return numbers + currentTotal;
  }, 0);
  return total;
};
