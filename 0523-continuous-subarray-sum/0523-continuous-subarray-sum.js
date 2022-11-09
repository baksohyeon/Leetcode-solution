
const checkSubarraySum = (nums, k) => {
  const map = new Map();
  const length = nums.length;

  if (k === 0 || length < 2) {
    return false;
  }

  let currentSum = 0;
  map.set(0, -1);

  for (let i = 0; i < length; i++) {
    currentSum += nums[i];
    currentSum %= k;

    //we check for the remainder
    if (map.has(currentSum)) {
      //we check if the length is greater than 1
      if (i - map.get(currentSum) > 1) {
        return true;
      }
    } else {
      map.set(currentSum, i);
    }
  }

  return false;
};
console.log(checkSubarraySum([23, 2, 6, 4, 7], 13));