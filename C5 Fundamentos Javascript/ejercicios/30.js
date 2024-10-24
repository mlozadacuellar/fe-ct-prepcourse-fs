function deEuroAdolar(euro) {
  // La función recibe un argumento llamado euro el cual es un numero.
  // Debes calcular el valor recibido como argumento pasándolo a dólares.
  // Suponiendo que 1 euro equivale a 1.20 dólares.
  // Retornar el valor en dolares.
  // Por ejemplo: 
  // 1 ---> 1.20
  // 0 ---> 0
  // Tu código:
  return (euro * 1.20);

}
let euro1 = 3
let euro2 = 4
let euro3 = 7

console.log(deEuroAdolar(euro1));
console.log(deEuroAdolar(euro2));
console.log(deEuroAdolar(euro3));


module.exports = deEuroAdolar;
