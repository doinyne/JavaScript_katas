function typeValidation(variable, type) {
  if ( typeof(variable) == 'number' ) {
    return true
  } else return false
}

console.log(typeValidation("hello", "number"))