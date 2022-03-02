function usdcny(usd) {
  let fo = usd * 6.75;
  return fo.toFixed(2)+ ' Chinese Yuan';
};

console.log(usdcny(50.00));

