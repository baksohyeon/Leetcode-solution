/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

const convert = (str, numRows) => {
  const length = str.length;
  if (numRows < 2 || length < numRows) {
    return str;
  }

  const rows = new Array(numRows).fill("");
  let reverse = false;
  let count = 0;
  for (let i = 0; i < length; i++) {
    rows[count] += str[i];
    reverse ? count-- : count++;
    if (count === numRows - 1 || count === 0) {
      reverse = !reverse;
    }
  }
  return rows.join("");
};