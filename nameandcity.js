function sayHello( name, city, state ) {
  let names = name.join(',').replace(",", " ");
  console.log(names)
  return "Hello, " + names + "!" + " Welcome to " + city + ", " + state + "!";
}

console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'))

// 'Hello, John Smith! Welcome to Phoenix, Arizona!'