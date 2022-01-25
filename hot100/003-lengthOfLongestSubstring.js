/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const arr = []
  let max = 0
  for (let s1 of s) {
    if (arr.indexOf(s1) === -1) {
      arr.push(s1)
    } else {
      max = Math.max(max, arr.length)
      arr.splice(0, arr.indexOf(s1) + 1)
      arr.push(s1)
    }
  }
  return Math.max(max, arr.length)
};

const s = 'abcabcbb'
console.log(lengthOfLongestSubstring(s))
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
