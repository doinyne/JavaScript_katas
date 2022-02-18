function isEven(s)
{ 
  return s.length % 2 === 0
  };


function middle(s) {
  let mid = s.length / 2;
  // dean mid = 2
  // sam mid = 1.5
  if(isEven(s)) {
    // if dean return "ea"
    // if finley return "nl"
    return s.charAt(mid - 1).concat(s.charAt(mid));
  }else if(isEven(s) === false) {
    return s.charAt(mid);
  };
};
console.log(middle("abcde") === "c");
console.log(middle("abcd") === "bc");
// odd or even

// function oddOrEven(array) {
//    let arrayStr = array.split(",");
//    let sum = arrayStr.reduce(function(total,num){
//      return parseFloat(total) + parseFloat(num);
//    });
// };

// function sumStr(str){
//   let strArr = str.split(",");
//   let sum = strArr.reduce(function(total, num){
//     return parseFloat(total) + parseFloat(num);
//   });

//   return sum;
// }