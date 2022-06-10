
// my first attemp

function friend(friends){
  let friendsList = [];
  for(let i = 0; i < friends.length; i++) {
    if( friends[i].length === 4) {
      friendsList.push(friends[i])
    } 
  }
  return friendsList
}

console.log(friend(["Ryan", "Mark", "Kieran"]))

// push names of people to new array called friends if their name is 4 characters long


// youtube walk through 