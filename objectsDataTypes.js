function animal(obj){
  //   var foo = {
  //     name: "dog", leg: 4, color:"white"
  //   };
    return "This " + obj["color"] + " " + obj["name"] + " has " + obj["legs"] + " legs.";
  }

  function animal(obj){
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
  }