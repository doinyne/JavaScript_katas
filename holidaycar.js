function rentalCarCost(d) {
  // one day costs 40
  // if you have car for 3 or more days you get 20 off
  // if you have car for 7 or more days you get and extra 30 off
  let day = 40;
  if(d <= 2) {
    return d * day
  } else if (d < 7 && d > 2) {
    return d * day - 20
  } else {
    return d * day - 50
  }
}

console.log(rentalCarCost(8))
// (1)40
// (2)80
// (3)100
// (4)140
// (5)180
// (6)220
// (7)230