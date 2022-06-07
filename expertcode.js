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

// Check to see if the current tab is displayed.
const isBrowserTabInView = () => document.hidden;
isBrowserTabInView();

//Find out if the number is odd or even.
const even = num => num % 2 === 0;
console.log(even(2)); // true
console.log(even(3)); // false

//Hexadecimal Generator
const hex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
console.log(hex());

//Remove Duplicates from an Array
const removeDuplicates = (arr) => [...new Set(arr)];
console.log(removeDuplicates([1, 2, 3, 3, 4, 4, 5, 5, 6])); // Result: [ 1, 2, 3, 4, 5, 6 ]

//Dark Mode Detection
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
console.log(isDarkMode) // Result: True or False

//Verify that the required element is focused.
const elementIsInFocus = (el) => (el === document.activeElement);
elementIsInFocus(anyElement) // Result: If it is in focus, it will return True, otherwise it will return False

//Verify that the current user is able to handle touch events.
const touchSupported = () => {
  (‘ontouchstart’ in window || window.DocumentTouch && document instanceof window.DocumentTouch);
}
console.log(touchSupported()); // Result: If touch event is supported, it will return True, otherwise it will return False