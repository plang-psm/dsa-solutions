var transpose = function (matrix) {
    const row = matrix.length
    const column = matrix[0].length

    let transposeMatrix = Array.from({ length: column }, () => Array(row).fill(0));

    for (let i = 0; i < column; i++) {
        for (let j = 0; j < row; j++) {
            transposeMatrix[i][j] = matrix[j][i]
        }
    }
    return transposeMatrix
};