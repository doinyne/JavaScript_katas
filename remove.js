function remove (string) {
  let last = string.charAt(string.length -1)
  if(last === "!") {
    return string.slice(string.length -1)  
  } else return string;
}

console.log(remove("hi!"))