function defineSuit(card) {
  switch(card) {
      case "♣":
        console.log("clubs");
        break;
      case "♦":
        console.log("diamonds");
        break;
      case "♥":
        console.log("hearts");
        break;
      case "♠": 
        console.log("spades");
        break;
  }
}

console.log(defineSuit('Q♠'))