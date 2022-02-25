function reverseWords(str) {
  let splitArray = str.split('');

  let reverseArray = splitArray.reverse();

  let joinArray = reverseArray.join('');

  return joinArray;

};

console.log(reverseWords("Dean Lewis was here"));