// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
  // La función recibe un argumento llamado num el cual es un numero.
  // Debes Retorna el valor de "num" elevado al cuadrado.
  // Por ejemplo: 
  // 6 ---> 36
  // 0 ---> 0
  // Tu código:
  return Math.pow(num, 2);

}
let numero1 = 3
let numero2 = 7
let numero3 = 9

console.log(elevarAlCuadrado(numero1));
console.log(elevarAlCuadrado(numero2));
console.log(elevarAlCuadrado(numero3));

module.exports = elevarAlCuadrado;
