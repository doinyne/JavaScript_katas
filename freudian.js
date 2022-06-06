function toFreud(string) {
  let arr = string.split(' ');
  let arr2 = []

  for (var i = 1; i <= arr.length; i++){
    arr2.push("sex");
  }
  return arr2.join(" "); 
}

console.log(toFreud("Dean Lewis"));