/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // const arr = []
  // let max = 0
  // for (let s1 of s) {
  //   if (arr.indexOf(s1) === -1) {
  //     arr.push(s1)
  //   } else {
  //     max = Math.max(max, arr.length)
  //     arr.splice(0, arr.indexOf(s1) + 1)
  //     arr.push(s1)
  //   }
  // }
  // return Math.max(max, arr.length)
  let len = s.length;
  let l = 0;
  let ans = 0;
  let i = 0;
  for (; i < len; i++) {
      let pos = s.indexOf(s[i], l);
      // 从 [l, i] 区间如果有字符和当前字符重复，则把 l 移动到 重复字符的下一位
      if (pos < i) {
          ans = Math.max(ans, i - l);
          l = pos + 1;
      }
  }
  return Math.max(ans, i - l);
};

const s = 'abcabcbb'
console.log(lengthOfLongestSubstring(s))
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
