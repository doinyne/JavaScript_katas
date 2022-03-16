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

const inexpensiveItems = items.some((item) => {
  return item.price <= 100;
})

console.log(inexpensiveItems);







