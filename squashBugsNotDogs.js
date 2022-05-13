function howManyDalmations(number) {
  
  let dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"];
  
  let respond = number <= 10 ? dogs[0] : number <= 50 ? dogs[1] : number = 101 ? dogs[3] : number >= 51 ? dogs[2]
  
}


console.log(howManyDalmations(55));
