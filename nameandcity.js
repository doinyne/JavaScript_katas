function sayHello( name, city, state ) {
  let names = name.join(',').replace(",", ' ').replace(",", " ").replace(",", " ");
  return "Hello, " + names + "!" + " Welcome to " + city + ", " + state + "!";
}

console.log(sayHello(['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois'))

// 'Hello, John Smith! Welcome to Phoenix, Arizona!'