function litres(time) {

  let i = Math.floor(time)

  if(i < 2) {
    return 0;
  }else {
    return(Math.floor( i / 2));
  };
};

console.log(litres(10));
  