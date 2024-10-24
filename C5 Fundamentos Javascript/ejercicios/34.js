// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function redondearNumero(num) {
   // La función recibe un argumento llamado num el cual es un numero.
   // Debes redondear "num" al entero más próximo y retornarlo.
   // Por ejemplo: 
   // 1.5 ---> 2
   // 0.1 ---> 0
   // Tu código:
   return Math.round(num);

}
let num1 = 3.54
let num2 = 23.5
let num3 = 56.3

console.log(redondearNumero(num1));
console.log(redondearNumero(num2));
console.log(redondearNumero(num3));

module.exports = redondearNumero;
