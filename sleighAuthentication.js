function Sleigh() {

  Sleigh = userInput.toLowerCase();
}

Sleigh.prototype.authenticate = function(name, password) {
  if(name === "Santa Claus" && password === "Ho Ho Ho!") {
    return true;
  };
};

console.log(Sleigh.prototype.authenticate("Dean, Hello Hello"));