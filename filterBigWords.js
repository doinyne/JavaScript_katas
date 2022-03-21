function filterLongWords(sentence, n) {
  const words = sentence.split(' ');
  const word = words.forEach((word) => {
    return word.length > n
  });
  return word
}

console.log(filterLongWords("The quick brown fox jumps over the lazy dog", 4))