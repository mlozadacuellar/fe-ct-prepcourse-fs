// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCubo(num) {
  // La función recibe un argumento llamado num el cual es un numero.
  // Debes Retorna el valor de "num" elevado al cubo.
  // Por ejemplo: 
  // 3 ---> 27
  // 0 ---> 0
  // Tu código:
  return Math.pow(num, 3);

}
let numero1 = 3
let numero2 = 5
let numero3 = 4

console.log(elevarAlCubo(numero1));
console.log(elevarAlCubo(numero2));
console.log(elevarAlCubo(numero3));


module.exports = elevarAlCubo;
