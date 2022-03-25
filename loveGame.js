function howMuchILoveYou(nbPetals) {
  switch ((nbPetals - 1) % 6) {
      case 1:
          return "a little";
      case 2:
          return "a lot";
      case 3:
          return "passionately";
      case 4:
          return "madly";
      case 5:
          return "not at all";
      default:
          return "I love you";
  }
}
console.log(howMuchILoveYou(1))