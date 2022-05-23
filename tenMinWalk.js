function isValidWalk(walk) {
  const start = walk[0]
  const length = walk.length
  const end = walk[walk.length - 1]
  const firstMove = walk[1]
  
  if(length == 10 && start != firstMove && start === end) {
    return true;
  } else if (start !== end) {
    return false;
  }
}

console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']))