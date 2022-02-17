function getMiddle(s)
{ 
  if(s % 2 === 0) {
    return "y";
  }else if(s % 2 !== 0) {
    return "x";
  };
}

// odd or even

function oddOrEven(array) {
   let arrayStr = array.split(",");
   let sum = arrayStr.reduce(function(total,num){
     return parseFloat(total) + parseFloat(num);
   });
};

function sumStr(str){
  let strArr = str.split(",");
  let sum = strArr.reduce(function(total, num){
    return parseFloat(total) + parseFloat(num);
  });

  return sum;
}