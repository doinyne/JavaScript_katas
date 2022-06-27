function redistributeWealth(wealth) {
  var sum = 0;
  var average = 0;

  for(var i = 0;i<wealth.length;i++)
  {
    sum += wealth[i];
  }
  average = sum / wealth.length;
  
  for(var i = 0;i<wealth.length;i++)
  {
    wealth[i] = average;
  }
}

console.log(redistributeWealth([5, 10, 6]))