// F = 1 step forward

// L = tern to the left 90 degrees;

// R = turn to the right 90 degrees;

// the robot needs to turn 180 degrees if facing the wrong direction

// RF = 3 Steps right 90 degrees and forward. to return RRF 

// any letter not FLR should be ignored

// if(directions !== "F", "L", "R") {
//   direction = directions.replace(//, "");
// };

function solution(directions) {
  start = 0;
  position = 0;

  for (var i = 0; i < directions.length; i++) {
    console.log(directions[i]);
  }
  if(directions[i, 0] === "F") {
    position += 1;
  } else if(directions[i] === "L") {
    position += 1;
  } else if(directions[i] === "R") {
    position += 1;
  }
  return position;
}

console.log(solution("FxLxLxFx"))