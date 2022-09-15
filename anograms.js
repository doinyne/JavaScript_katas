function anograms(wordOne, wordTwo) {
  let word1 = wordOne.split('').sort().join('');
  let word2 = wordTwo.split('').sort();
  

  if(word1 === word2) {
    return true;
  } else {
    return false;
  }
  
}
console.log(anograms('abab', 'abba'));