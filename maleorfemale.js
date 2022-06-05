function chromosomeCheck(sperm) {
  let cum = sperm[1]
  if(cum === "Y") {
    return "Congratulations! You're going to have a son."
  } else if (cum != "Y") {
    return "Congratulations! You're going to have a daughter."
  }
}

console.log(chromosomeCheck("XX"))