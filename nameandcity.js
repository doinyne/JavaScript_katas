function sayHello( name, city, state ) {
  let names = name.join(',').replace(",", ' ').replace(",", " ").replace(",", " ");
  console.log( names );
  console.log(name.length)
  if (name.length > 2) {
  return "Hello, " + names + "!" + " Welcome to " + city + ", " + state + "!";
  } else {
    return "Hello, " + names + "!" + " Welcome to " + city + ", " + state + "!";
  }
}

console.log(sayHello(['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois'))

// 'Hello, John Smith! Welcome to Phoenix, Arizona!'