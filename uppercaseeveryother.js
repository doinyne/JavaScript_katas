function spongeMeme(sentence) {
  var res = "";
  for (i=0; i < sentence.length; i++) {
     res += i % 2 == 0 ? sentence.charAt(i).toUpperCase() : sentence.charAt(i);
  }
  return res;
}

console.log(spongeMeme("stop Making spongebob Memes!"))