function spongeMeme(sentence) {
  let str = sentence.toLowerCase().split('');
  
  
  for (let i = 0; i < str.length; i++) {
    if( str[i] === str[i].toLowerCase ()) {
      console.log(str[i].toUpperCase() + str[i]); 
    }
  }
}

console.log(spongeMeme("stop Making spongebob Memes!"))