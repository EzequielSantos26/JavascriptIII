// Soma dos números inteiros de 1 a n
function somaNumeros(n) {
  // Sua implementação aqui
  if (n == 1) {
    return 1;
  } else {
    return n + somaNumeros(n - 1);
  }
}
 
// Verifica se um número é par
function ehPar(number) {
  // Sua implementação aqui
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

function fibonacci(n) {
  // Sua implementação aqui
  if(n <3) return 1;
  return fibonacci(n -1) + fibonacci (n -2)

}

module.exports = { somaNumeros, ehPar, fibonacci }; 