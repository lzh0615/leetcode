/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const maxNum = n * n;
  const result = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let currentNum = 1;

  let row = 0
  let col = 0

  const directions = [[0, 1], [1,0], [0, -1], [-1, 0]]
  let directionIndex = 0
  while (currentNum <= maxNum) {
    result[row][col] = currentNum
    currentNum++
    const [x, y] = directions[directionIndex]
    const nextRow = row + x
    const nextCol = col + y
    if(nextRow < 0 || nextRow >= n || nextCol < 0 || nextCol >= n || result[nextRow][nextCol] !== 0) {
      directionIndex = (directionIndex + 1) % 4
    }
    row += directions[directionIndex][0]
    col += directions[directionIndex][1]
  }
  return result
};

export default generateMatrix;
