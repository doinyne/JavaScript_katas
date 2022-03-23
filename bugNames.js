const data = [
  {name: 'Joe', age: 20},
  {name: 'Bill', age: 30},
  {name: 'Kate', age: 23}
]

function getNames(data){
  data.map((item) => {
    return item.name
  });
};
console.log(getNames())
