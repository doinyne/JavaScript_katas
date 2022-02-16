function testEven(n) {
  if(n % 2 === 0) {
    return true;
  }else if(n % 2 === 1) {
    return false;
  }else if(n % 1 !== 0) {
    return false;
  }
};
testEven(10);

function even_or_odd(number) {
  if(number % 2 === 0) {
    return "Even";
  } else if(number % 2 === 1) {
    return "Odd";
  } else if(number % 2 !== 1) {
    return "Odd";
  };
};
even_or_odd(10);