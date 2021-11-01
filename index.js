import longestPalindrome from "./005-longestPalindrom.js";
import threeSum from "./015-threeSum.js";
import merge from "./056-mergeIntervals.js";
import sortColors from "./075-sortColors.js";
import getRow from "./119.PascalIsTriangleII.js";

const main = () => { 
  // 005 最长回文子串
  const longestPalindromeTest1 = longestPalindrome('babad')
  // 015 三数之和
  const threeSumTest1 = threeSum([-1, 0, 1, 2, -1, -4])
  // 056 合并区间
  const mergeTest1 = merge([[1,3],[2,6],[8,10],[15,18]])
  // 075  颜色分类
  const sortColorsTest1 = sortColors([2,0,2,1,1,0])
  // 119 杨辉三角 II
  const getRowTest1 = getRow(3)

  const test = getRowTest1
  return test
}
console.log(main());
