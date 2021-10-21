import longestPalindrome from "./005-ongestPalindrom.js";
import threeSum from "./015-threeSum.js";



const main = () => { 
  // 005 最长回文子串
  const longestPalindromeTest1 = longestPalindrome('babad')
  // 015 三数之和
  const threeSumTest1 = threeSum([-1, 0, 1, 2, -1, -4])

  const test = longestPalindromeTest1
  return test
}
console.log(main());
