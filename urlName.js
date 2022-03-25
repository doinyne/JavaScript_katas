function generateLink(user) {
  var replaced = user.replace(/\s/g, "%20");
  return "http://www.codewars.com/users/" + replaced
}

console.log(generateLink("h%7B%2B%24T%5Bx%5D%3C%3F%5B*%40p_e9%7CZ*v%5BY%2C"))