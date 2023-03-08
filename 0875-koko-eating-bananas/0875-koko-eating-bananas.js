/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const minEatingSpeed = (piles, h) => {
  // k [consumed banana/hr]
  let start = 0;
  let end = Math.max(...piles);

  while (start <= end) {
    const mid = Math.floor((end + start) / 2);
    const expectedEatingHour = piles.reduce((acc, cur) => {
      return acc + Math.ceil(cur / mid);
    }, 0);
    if (expectedEatingHour > h) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return start;
};
