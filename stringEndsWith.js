function solution(str, ending){
  // console.log(str.endsWith(ending))
  if(str.endsWith(ending)) {
    return true
  } else if (str != str.endsWith(ending)) {
    return false
  }
}

console.log(solution("Dean", "an"))

//shortest

function solution(str, ending){
  return str.endsWith(ending);
}