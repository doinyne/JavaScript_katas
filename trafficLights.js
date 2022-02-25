function updateLight(current) {
  var lights
  switch(current){
    case "green":
      lights = "yellow"
      break;
    case "yellow":
      lights = "red"
      break;
    case "red":
      lights = "green"
      break;
  };
  return lights;

};

console.log(updateLight("yellow"));