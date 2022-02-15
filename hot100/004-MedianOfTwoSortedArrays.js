/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  const len1 = nums1.length;
  const len2 = nums2.length;
  const totalLen = len1 + len2;
  if (totalLen % 2 === 1) {
    const midLen = Math.floor(totalLen / 2);
    return getMedianSortedArrays(nums1, nums2, midLen + 1);
  } else {
    const midLen1 = Math.floor(totalLen / 2) - 1;
    const midLen2 = Math.floor(totalLen / 2);
    return (getMedianSortedArrays(nums1, nums2, midLen1 + 1)  + getMedianSortedArrays(nums1, nums2, midLen2 + 1)) / 2;
  }

};

const getMedianSortedArrays = (nums1, nums2, k) => {
  const len1 = nums1.length;
  const len2 = nums2.length;
  let index1 = 0
  let index2 = 0
  console.log(nums1,nums2,k);
  while (true) {
    // 边界
    if (index1 == len1) return nums2[index2 + k - 1];
    if (index2 == len2) return nums1[index1 + k - 1];
    if (k === 1) return Math.min(nums1[index1], nums2[index2]);

    // 正常情况
    let half = Math.floor(k/2);
    let newIndex1 = Math.min(index1 + half, len1) - 1;
    let newIndex2 = Math.min(index2 + half, len2) - 1;
    const pivot1 = nums1[newIndex1];
    const pivot2 = nums2[newIndex2];
    if (pivot1 <= pivot2) {
      k -= (newIndex1 - index1 + 1);
      index1 = newIndex1 + 1;
    } else {
      k -= (newIndex2 - index2 + 1);
      index2 = newIndex2 + 1;
    }
  }
};

const nums1 = [1,2];
// const nums1 = [2,3];
const nums2 = [3,4];
console.log(findMedianSortedArrays(nums1, nums2));
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

