function retornarPerimetro(lado) {
   // La función recibe un argumento llamado lado el cual es un numero.
   // Retornar el perimetro de un cuadrado.
   // Por ejemplo: 
   // 2 ---> 8
   // 0 ---> 0
   // Tu código:
   return (lado * 4);
}
let num1 = 3
let num2 = 6
let num3 = 9

console.log(retornarPerimetro(num1));
console.log(retornarPerimetro(num2));
console.log(retornarPerimetro(num3));

module.exports = retornarPerimetro;
