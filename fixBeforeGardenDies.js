function rainAmount(mm){
  let amount = 40 - mm;
    if (mm <= 39) {
         return "You need to give your plant " + amount + "mm of water"
    }
    else if(mm >= 40) {
         return "Your plant has had more than enough water for today!"
    };
}