function howMuchILoveYou(nbPetals) {
   switch (nbPetals) {
    case 1:
      console.log('I love you')
      break;
    case 2:
      console.log('a little')
      break;
    case 3:
      console.log('a lot')
      break;
    case 4:
      console.log('passionately')
      break;
    case 5:
      console.log('madly')
      break;
    case 6:
      console.log('not at all')
      break;
    default:
      console.log('sorry')
   }
}
console.log(howMuchILoveYou(1))