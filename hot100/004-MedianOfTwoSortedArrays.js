/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  let i = 0, j = 0
  const arr = []
  while (nums1.length || nums2.length) {
    if (nums1 && nums1[i] < nums2[j] || nums2.length === 0) {
      arr.push(nums1.splice(i, 1)[0])
    } else if (nums2 && nums2[j] < nums1[i] || nums1.length === 0) {
      arr.push(nums2.splice(j, 1)[0])
    } else {
      arr.push(nums1.splice(i, 1)[0])
      arr.push(nums2.splice(j, 1)[0])
    }
  }
  const len = arr.length
  if (len % 2 === 0) {
    return (arr[len / 2 - 1] + arr[len / 2]) / 2;
  }
  return arr[(len - 1) / 2];

};

const num1 = [0, 0];
const num2 = [0, 0];
console.log(findMedianSortedArrays(num1, num2));
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

