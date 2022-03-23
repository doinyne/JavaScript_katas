function poundToDollars(n) {
  let dollars = n * 1.32;
  return "$" + dollars.toString()
}

function dollarToPound(num) {
  let pound = num * 0.76;
  return "£" + pound.toString();
}

console.log(dollarToPound(100))
console.log(poundToDollars(100))