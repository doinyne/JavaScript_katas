const sum = arr => arr.reduce((sum, v) => sum + v);

function arrayPlusArray(arr1, arr2) {
  return sum(arr1) + sum(arr2);
};
