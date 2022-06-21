function timeConversion(s) {
  let time = s.split('');
  let arr2 = time.join('')
  let arr3 = arr2.split(':')

  if(time.includes('P', 0)) {
    return Number(arr3[0]) + Number(12) + ":" + arr3[1] + ":" + arr3[2].split(/(PM|AM)/gm)[0]
  } else if (arr2.includes(12 && 'AM')) {
    return Number(arr3[0]) - Number(12) + '0' + ":" + arr3[1] + ":" + arr3[2].split(/(PM|AM)/gm)[0]
  } else {
    return s.split(/(PM|AM)/gm)[0]
  }
}

console.log(timeConversion("12:05:45AM"))