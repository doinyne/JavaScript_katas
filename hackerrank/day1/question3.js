function timeConversion(s) {
  let time = s.split('');
  console.log(time)
  let arr2 = time.join('')
  console.log(arr2)
  let arr3 = arr2.split(':')
  console.log(arr3)
  let indexFirst = arr2[0] + arr2[1] + arr2[8] + arr2[9]
  console.log(indexFirst)

  if(time.includes('P', 0) && Number(arr3[0] + arr3[1] <= "12")) {

    return Number(arr3[0]) + Number(12) + ":" + arr3[1] + ":" + arr3[2].split(/(PM|AM)/gm)[0]

  } else if (indexFirst === "12AM") {

    return Number(arr3[0]) - Number(12) + '0' + ":" + arr3[1] + ":" + arr3[2].split(/(PM|AM)/gm)[0]

  } else {

    return s.split(/(PM|AM)/gm)[0]

  }
}

console.log(timeConversion("01:05:45AM"))

