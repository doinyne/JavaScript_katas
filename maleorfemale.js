function chromosomeCheck(sperm) {
  let cum = sperm[1]
  if(cum === "Y") {
    return "Congratulations! You're going to have a daughter."
  } else if (cum != "Y") {
    return "Congratulations! You're going to have a son."
  }
}

console.log(chromosomeCheck("XX"))