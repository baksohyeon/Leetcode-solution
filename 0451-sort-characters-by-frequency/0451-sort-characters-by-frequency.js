const frequencySort = (str) => {
  const chars = [...str];

  const map = new Map();

  chars.forEach((char) => map.set(char, (map.get(char) || 0) + 1));

  const sortedChars = [...map].sort((a, b) => b[1] - a[1]);
  return sortedChars.map(([char, count]) => char.repeat(count)).join("");
};
