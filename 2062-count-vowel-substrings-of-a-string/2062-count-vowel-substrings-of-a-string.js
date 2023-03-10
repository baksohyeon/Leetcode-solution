const countVowelSubstrings = (word) => {
  const arrayOfVowel = ["a", "e", "i", "o", "u"];
  const vowelSet = new Set(arrayOfVowel);
  const chars = [...word];
  let count = 0;

  for (let i = 0; i < word.length - 4; i++) {
    if (!vowelSet.has(chars[i])) {
      continue;
    }
    for (let j = i + 1; j < chars.length; j++) {
      if (!vowelSet.has(chars[j])) {
        break;
      } else if (j >= i + 4) {
        const subString = chars.slice(i, j + 1);
        const set = new Set(subString);
        if (set.size === 5) {
          count++;
        }
      }
    }
  }
  return count;
};