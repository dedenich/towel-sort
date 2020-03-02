
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let resArr = [];
  if (!matrix) return []
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2) {
      resArr = resArr.concat(matrix[i].reverse());
    } else {
      resArr = resArr.concat(matrix[i]);
    }
  }
  return resArr;
}
