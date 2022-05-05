function removeDuplicateWords (s) {
  const seen = new Set();
  
  return s.split(' ').filter(word => {
      if (seen.has(word)) return false;
      seen.add(word);
      return true;
  })
  .join(' ')
}

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))