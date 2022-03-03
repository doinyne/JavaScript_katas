var isValid = function(s) {
  switch(s) {
      case "()":
          console.log("true");
          break;
      case "[]":
          console.log("true");
          break;
      case "{}":
          console.log("true");
          break;
      default:
          console.log("false");
  };
  return s;
};

console.log(isValid("()[]{}"));