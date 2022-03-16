// 8 Must Know JavaScript Array Method

// example array

const items = [
  { name: 'Bike',     price: 100  },
  { name: 'TV',       price: 200  },
  { name: 'Album',    price: 10   },
  { name: 'Book',     price: 5    },
  { name: 'Phone',    price: 500  },
  { name: 'Computer', price: 1000 },
  { name: 'Keyboard', price: 25   }
]


// filer method

const filteredItems = items.filter((item) => {
  return item.price <= 100
})

console.log(filteredItems);

// map method

const itemNames = items.map((item) => {
  return item.name
})

console.log(itemNames);

const itemPrice = items.map((item) => {
  return item.price
})

console.log(itemPrice);

// find Method

const foundItem = items.find((item) => {
  return item.name === 'Book'
})

console.log(foundItem);

// for each method

items.forEach((item) => {
  console.log(item.price)
});

// some function. checks if anything in the array returns true for the function
// .every checks each and every item to see if it is below 100
// .every would return false because there are items above 100
const inexpensiveItems = items.some((item) => {
  return item.price <= 100;
})

console.log(inexpensiveItems);

// reduce. reduce takes an item and a property (new array)
// reduce also takes a starting point. normally 0

const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);

console.log(total);

// includes

const numbers = [1, 2, 3, 4]

const includesTwo = numbers.includes(2);

console.log(includesTwo)







