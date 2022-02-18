var countSheep = function (num){
  for(let i = 1; i < num; i++) {
    console.log(i + " sheep");
  }
};
console.log(countSheep(10));

// num = 2 output 1 sheep, 2 sheep
// num = 5 output 1 sheep, 2 sheep, 3 sheep, 4 sheep, 5 sheep
// num = 1 output 1 sheep