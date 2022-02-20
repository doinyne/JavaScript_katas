var countSheep = function (num){
  for(let i = 0; i < num; i++) {
    console.log(i + " sheep...");
  };
};
var newStr = function(num){
  for(let i = 0; i === num; i++) {
    console.log('');
  };
};
console.log(countSheep(10))
console.log(newStr(0))

// num = 2 output 1 sheep, 2 sheep
// num = 5 output 1 sheep, 2 sheep, 3 sheep, 4 sheep, 5 sheep
// num = 1 output 1 sheep