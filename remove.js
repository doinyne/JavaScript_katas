function remove (string) {
  let last = string.charAt(string.length -1)

  if(last === "!") {
    return string.slice(0, -1) 
  } else return string;
}

console.log(remove("hi!!!!"))