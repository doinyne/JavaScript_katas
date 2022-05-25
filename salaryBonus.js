function bonusTime(salary, bonus) {
  if(bonus === true) {
    return "£" + salary * 10
  } else if(bonus === false) {
    return "£" + salary
  }
}

console.log(bonusTime(2, true))

function bonusTime(salary, bonus) {
  return bonus ? `£${10 * salary}` : `£${salary}`;
}