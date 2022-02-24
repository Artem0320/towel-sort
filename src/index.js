module.exports = function towelSort (matrix) {
  if(matrix == undefined) {
    return []
  } else {
    for(let i = 1; i <= matrix.length; i++) {
      if(i % 2 == 1) {
        matrix[i - 1].sort((a, b) => a - b)
      } else {
        matrix[i - 1].sort((a, b) => b - a)
      }
    }

    return matrix.flat()
  }
}