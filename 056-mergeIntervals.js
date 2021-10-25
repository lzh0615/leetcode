/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  let prev = intervals[0]
  let res = []
  for (let i = 0; i < intervals.length; i++) {
    let curr = intervals[i]
    if (curr[0] > prev[1]) {
      res.push(prev)
      prev = curr
    } else {
      prev[1] = Math.max(curr[1], prev[1])
    }
  }

  res.push(prev)
  return res
};

export default merge
