const reverseSeq = n => {
  const values = [];
  
  for (let i = n; n > 0; n--){
    values.push(n);
  }
  return values;
};

console.log(reverseSeq(10));