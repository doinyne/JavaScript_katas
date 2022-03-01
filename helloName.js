function hello(name) {
  name = name.toLowerCase(name);
  
  name = name.charAt(0).toUpperCase() + name.slice(1);

  if(name === ""){
    return "Hello, World!";
  }else{
    return "Hello, " + name + "!";
  };
};

console.log(hello("dean"));