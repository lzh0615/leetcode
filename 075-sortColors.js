/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const swap = (nums, l, r) => {
    [nums[l], nums[r]] = [nums[r], nums[l]]
  }

  let L = 0
  let R = nums.length - 1
  let i = 0
  while (i <= R) {
    if (nums[i] === 0) swap(nums, i++, L++)
    else if (nums[i] === 2) swap(nums, i, R--)
    else i++
  }
  return nums
};

export default sortColors
