function makeNegative(num) {
  if(num <= 0) {
    return num;
  }else if(num > 0) {
    return num * -1;
  };
};
console.log(makeNegative(9));