// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function redondearHaciaArriba(num) {
  // La función recibe un argumento llamado num el cual es un numero.
  // Debes redondear "num" hacia arriba y retórnalo.
  // Por ejemplo: 
  // 2.5 ---> 3
  // 0.1 ---> 1
  // Tu código:
  return Math.ceil(num);

}
let num1 = 34.5
let num2 = 45.2
let num3 = 23.6

console.log(redondearHaciaArriba(num1));
console.log(redondearHaciaArriba(num2));
console.log(redondearHaciaArriba(num3));

module.exports = redondearHaciaArriba;