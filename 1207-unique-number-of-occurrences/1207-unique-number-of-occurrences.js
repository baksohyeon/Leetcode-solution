const uniqueOccurrences = (arr) => {
  const map = new Map();
  arr.forEach((num) => {
    map.set(num, (map.get(num) || 0) + 1);
  });

  // map 총 개수랑 set- value 값이랑 같은지 반환
  const values = [...map.values()];
  return values.length === new Set(values).size;
};