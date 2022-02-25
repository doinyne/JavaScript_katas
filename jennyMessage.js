function greet(name){
  if(name === "Johnny") {
    return "Hello, my love!";
  }else if(name) {
    return "Hello, "+ name +"!";
  };
};

console.log(greet("Johnny"));