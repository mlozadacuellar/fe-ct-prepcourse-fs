// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevar(num, exponent) {
  // La función recibe dos argumentos llamados "num" y "exponent" los cuales son numeros.
  // Debes Retorna el valor de "num" elevado al "exponent".
  // Por ejemplo: 
  // 2, 2 ---> 4
  // 0, 5 ---> 0
  // Tu código:
  return Math.pow(num, exponent);
}
let numero1 = 4
let numero2 = 3
let numero3 = 5
let numero4 = 2

console.log(elevar(numero1, numero2));
console.log(elevar(numero1, numero3));
console.log(elevar(numero1, numero4));
console.log(elevar(numero4, numero2));

module.exports = elevar;