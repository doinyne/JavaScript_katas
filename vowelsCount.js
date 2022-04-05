function getCount(str) {
  let vowelsCount = 0;
  //split the str into an array but using .split("")
  const arr = str.split("");
  // now we can loop through the array
  for ( let i = 0; i < arr.length; i++) {
    // this [i] below represents all the charaters in the array
    switch(arr[i]) {
        case 'a':
          vowelsCount++;
          break;
        case 'e':
          vowelsCount++;
          break;
        case 'i':
          vowelsCount++;
          break;
        case 'o':
          vowelsCount++;
          break;
        case 'e':
          vowelsCount++;
          break;
        case 'u':
          vowelsCount++;
    }
  }
  
  return vowelsCount;
}

console.log(getCount("Hello, my name is Dean Lewis"));