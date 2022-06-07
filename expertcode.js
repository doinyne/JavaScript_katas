// Get a boolean value (True/False) at random using math.

const randomBoolean = () => Math.random() >= 0.5;
console.log(randomBoolean());

// Determine if a given date falls on a working day.


const week = (date) => date.getDay()% 6 !== 0;
console.log(week(new Date(2021, 0, 11))); // Result: true (Monday)
console.log(week(new Date(2021, 0, 15))); // Result: false (Sunday)

//Reverse String
const reverse = str => str.split('').reverse().join('');
console.log(reverse('cake is yummy'));
// Result: 'ymmuy si ekac'