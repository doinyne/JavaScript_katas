//return price without vat
function excludingVatPrice(price){
  let vat = price / 15
  return price - vat.toFixed(2);
}

console.log(excludingVatPrice(230))