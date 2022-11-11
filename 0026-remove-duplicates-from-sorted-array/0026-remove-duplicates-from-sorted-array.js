/**
 * @param {number[]} nums
 * @return {number}
 */

// 깊은 복사 말고 얕은 복사 써서 문제 풀이할 것 
// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
const removeDuplicates = (nums) => {
  // 증가하는 순서
  // inplace로 삭제 딱 한개만 남게
  // 상대적인 순서는 그대로 남게
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != nums[index]) {
      nums[++index] = nums[i];
      console.log(nums);
    }
  }
  return index + 1;
};