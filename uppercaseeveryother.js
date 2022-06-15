function spongeMeme(sentence) {
  var str = sentence.toLowerCase()
  var res = "";
  for (i=0; i < str.length; i++) {
     res += i % 2 == 0 ? str.charAt(i).toUpperCase() : str.charAt(i);
  }
  return res;
}

console.log(spongeMeme("stop Making spongebob Memes!"))