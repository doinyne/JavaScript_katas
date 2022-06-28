function accum(s) {
	let mumbles = [];
  let arr = s.toString().toUpperCase().split('');
  console.log(arr)

  for (let i = 1; i < s.length; i++) {
    if(arr[i]) {
      mumbles.push(arr[i]);
    }
  }
  return mumbles
}

console.log(accum("ZpglnRxqenU"))