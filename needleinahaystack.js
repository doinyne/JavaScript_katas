function findNeedle(haystack) {
  let fail = "Your function didn't return anything"
  let answer = "found the needle at postion " + haystack.indexOf('needle')
  
  if (haystack.indexOf('needle') === -1) {
    return fail
  } else {
    return answer
  }

}

/*
function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}
*/

console.log(findNeedle(['3', '123124234', undefined, 'world', 'needle', 'hay', 2, '3', true, false]))