/* You are given an input string that controls the movement of a robot, "F" means take a step forward, "L" means turn 90 degrees to the left and "R" means turn 90 degrees to the right. E.g. "FLF" moves the robot one step forward, then turns it left by 90 degrees, then moves the robot one step forward. Write a function that returns the minimum number of commands that the robot needs to return to its starting point after following all the input commands. You should ignore any characters that are not capital F, L, or R. Hint: you may wish to track the robot's position using (X,Y) coordinates, assuming it starts at (0,0).

For example:

"RF" returns 3 (robot must turn twice and move forward one step (eg. "RRF")
"LFRFRFR" returns 1 (robot must step forward to return)
"FxLxLxFx" returns 0 (robot is already back at its starting point)
[execution time limit] 4 seconds (js)

[input] string directions

The directions for the robot

[output] integer

The number of commands needed to return to the starting point
*/

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
  let start = 0;
  let position = 0;

  for (var i = 0; i < directions.length; i++) {
    console.log(directions[i]);
  }
  if(directions[i, start] === "F") {
    position += 1;
    start += 1;
  } else if(directions[i, start] === "L") {
    position += 1;
  } else if(directions[i, start] === "R") {
    position += 1;
  }
  return position;

  // if(directions[i, 2] === "F") {
  //   position += 1;
  // } else if(directions[i, 2] === "L") {
  //   position += 1;
  // } else if(directions[i, 2] === "R") {
  //   position += 1;
  // }
}

console.log(solution("FLLF"))