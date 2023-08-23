function printMatrix(matrix) {
  for (let row = 0; row < matrix.length; row++) {
    console.log(matrix[row].join('\t'));
  }
}

function transposeMatrix(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  const transposed = [];

  for (let col = 0; col < numCols; col++) {
    transposed[col] = [];
    for (let row = 0; row < numRows; row++) {
      transposed[col][row] = matrix[row][col];
    }
  }

  return transposed;
}

// Criar a matriz A
const A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log("Matriz A:");
printMatrix(A);

const transposedA = transposeMatrix(A);
console.log("\nMatriz Transposta de A:");
printMatrix(transposedA);
