const quarterOf = (month) => {
  if(month > "9") {
    return 4;
  }else if(month > "6") {
    return 3;
  }else if(month > "3") {
    return 2;
  }else if(month > "0") {
    return 1;
  };
};

quarterOf(10);
