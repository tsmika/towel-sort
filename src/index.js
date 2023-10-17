module.exports = function towelSort(matrix) {
  if(matrix === undefined) return [];
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    result = i % 2 === 0 ? result.concat(matrix[i]) : result.concat(matrix[i].reverse());
  }
  return result;
}
