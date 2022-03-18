function lovefunc(flower1, flower2){
  if (flower1 % 2 === 0 && flower2 % 2 !== 0) {
    return true;
  }else if(flower1 % 2 !== 0 && flower2 % 2 === 0) {
    return true;
  }else return false;
};

console.log(lovefunc(1, 4));

function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
};

// takes two numbers
// even and odd = true 
// else = false 