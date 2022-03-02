const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  const canGo = mpg * fuelLeft;
  return canGo > distanceToPump;
};

console.log(zeroFuel(50, 25, 2));