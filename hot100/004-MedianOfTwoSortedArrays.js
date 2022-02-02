/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  const nums = nums1.concat(nums2).sort((a, b) => a - b);
  const len = nums.length;
  if (len % 2 === 0) {
    return (nums[len / 2 - 1] + nums[len / 2]) / 2;
  }
  return nums[(len - 1) / 2];
};

const num1 = [0, 0];
const num2 = [0,0];
console.log(findMedianSortedArrays(num1, num2));
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

