function findMedian(arr) {
  let sort = arr.sort();
  const middle = Math.floor(sort.length / 2);

    if (sort.length % 2 === 0) {
        return (sort[middle - 1] + sort[middle]) / 2;
    }

    return sort[middle];
}

console.log(findMedian([5,3,1,2,4]))