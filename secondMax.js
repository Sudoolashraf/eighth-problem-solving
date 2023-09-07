const secondMax = function(array) {
  if (array.length < 2) {
    throw new Error("Array should have at least two elements");
  }

  let max = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      secondMax = max;
      max = array[i];
    } else if (array[i] > secondMax && array[i] < max) {
      secondMax = array[i];
    }
  }

  return secondMax;
};

// Test cases
console.log(secondMax([1, 5, 2]));     // Output: 2
console.log(secondMax([-1, -5, 2]));   // Output: -1
console.log(secondMax([-3, -2, -7]));  // Output: -3
