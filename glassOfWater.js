function hydrate(s) {
  myString = s.replace(/\D/g,'');
  const arr = myString.split("");
  const sum = arr.reduce(function(total, v) {
    return parseInt(total) + parseInt(v)
  });
  return sum;
};

console.log(hydrate("1 beer"));