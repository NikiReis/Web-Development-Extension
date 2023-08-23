function multiplyMatrices(matrixA, matrixB) {
  const numRowsA = matrixA.length;
  const numColsA = matrixA[0].length;
  const numRowsB = matrixB.length;
  const numColsB = matrixB[0].length;

  // Verificar se as matrizes podem ser multiplicadas
  if (numColsA !== numRowsB) {
    console.log("Não é possível calcular a multiplicação das matrizes.");
    return null;
  }

  const resultMatrix = [];

  for (let i = 0; i < numRowsA; i++) {
    resultMatrix[i] = [];
    for (let j = 0; j < numColsB; j++) {
      let sum = 0;
      for (let k = 0; k < numColsA; k++) {
        sum += matrixA[i][k] * matrixB[k][j];
      }
      resultMatrix[i][j] = sum;
    }
  }

  return resultMatrix;
}

// Matriz A
const A = [
  [2, 3],
  [4, 5],
];

// Matriz B
const B = [
  [1, 2],
  [3, 4],
];

console.log("Matriz A:");
printMatrix(A);

console.log("\nMatriz B:");
printMatrix(B);

const resultMatrix = multiplyMatrices(A, B);

if (resultMatrix) {
  console.log("\nMatriz Resultante C = AxB:");
  printMatrix(resultMatrix);
}
