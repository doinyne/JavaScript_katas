function removeEveryOther(arr){
  r = []
  for (var i=0; i<arr.length; i++) {
   if (i%2===0) r.push(arr[i]); 
  }
  return r
}

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))