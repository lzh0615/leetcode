import longestPalindrome from "./005-longestPalindrom.js";
import threeSum from "./015-threeSum.js";
import sortColors from "./075-sortColors.js";


const main = () => { 
  // 005 最长回文子串
  const longestPalindromeTest1 = longestPalindrome('babad')
  // 015 三数之和
  const threeSumTest1 = threeSum([-1, 0, 1, 2, -1, -4])
  // 075  颜色分类
  const sortColorsTest1 = sortColors([2,0,2,1,1,0])

  const test = sortColorsTest1
  return test
}
console.log(main());
