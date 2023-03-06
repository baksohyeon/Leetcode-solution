const findKthPositive = (arr, k) => {
  // 해당 배열 가장 마지막 인자 값을 확인한다.
  // 해당 배열 마지막 인자값만큼 연속된 정수를 가진 배열을 만들어준다.
  // 만든 배열 길이와 비교해서 만약 수가 같으면 k만큼 더해준다.
  // 필터 걸어서 지워주고, k 값을 조작한다.
  //
  const maxInteger = arr[arr.length - 1];
  const originalArray = [...Array(maxInteger).keys()].map((x) => x + 1);
  const missingNumbers = originalArray.filter((x) => !arr.includes(x));
  const missingNumbersCount = missingNumbers.length;

  if (missingNumbersCount < k) {
    return maxInteger + (k - missingNumbersCount);
  }
  if (missingNumbersCount >= k) {
    return missingNumbers[k - 1];
  }
};

console.log(findKthPositive([2, 3, 4, 7, 11], 5));
// [_, 2, 3, 4, _, _, 7, _, _, _, 11]
// [(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)];
