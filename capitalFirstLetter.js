function capitalizeWord(word) {
  //   word = word.toLowerCase(word);
    
    word = word.charAt(0).toUpperCase() + word.slice(1);
    
    return word;
  };