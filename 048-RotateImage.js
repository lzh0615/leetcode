/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  //   console.log(matrix[i][j]); 1 2
  //  console.log(matrix[n - j - 1][i]); 7 4
  //  console.log(matrix[n - i - 1][n - j - 1]); 9 8
  //  console.log(matrix[j][n - i - 1]); 3 6
  //  console.log('-------');
  const n = matrix.length;
  for (let i = 0; i < n / 2; i++) {
    for (let j = i; j < n - i - 1; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[n - j - 1][i];
      matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
      matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
      matrix[j][n - i - 1] = temp;
    }
  }
  console.log(matrix);
};


export default rotate;
