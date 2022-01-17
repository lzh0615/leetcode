/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let result = [1];
  for (let i = 1; i <= rowIndex; i++) {
    let temp = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        temp.push(1);
      } else {
        temp.push(result[j - 1] + result[j]);
      }
    }
    result = temp;
  }
  return result;
};

export default getRow;
