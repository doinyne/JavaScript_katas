function highAndLow(numbers){
  return numbers.map(function(subNumbers) {
    return Math.max.apply(null, subNumbers);
  });  
};
