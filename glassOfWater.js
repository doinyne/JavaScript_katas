function hydrate(s) {
  myString = s.replace(/\D/g,'');
  const arr = myString.split("");
  const sum = arr.reduce(function(total, v) {
    return parseInt(total) + parseInt(v)
  });
  if(sum <= 1) {
    return sum +" glass of water";
  }else if(sum > 1) {
    return sum +" glasses of water";
  }
};

console.log(hydrate("1 beer"));