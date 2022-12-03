/**
 * @param {number} n
 * @return {number}
 */
const concatenatedBinary = (n) => {
  const nums = [...Array(n).keys()].map((x) => x + 1); 

  return nums.reduce((acc, num) => {
    return (acc * (1 << num.toString(2).length) + num) % (1e9 + 7);
  }, 0);

};