function openOrSenior(data){
  let arr = []

  if(data[0] > 55 && data[1] > 7) {
    arr.push("Senior");
  } else {
    arr.push("Open");
  };
  return arr
};

console.log(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]))