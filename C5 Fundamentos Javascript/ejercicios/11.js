function sonIguales(x, y) {
  // La función recibe dos argumentos llamados "x" e "y".
  // Retorna true si "x" e "y" son iguales.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 5, 5 ---> true 
  // 5, 8 ---> false 
  // Tu código:
  if (x == y) {
    return true;
  } else {
    return false;
  }
  
  
}

let number1 = 4
let number2 = 4
let number3 = 7
let number4 = 6

console.log(sonIguales(number1,number2));
console.log(sonIguales(number3,number4));



module.exports = sonIguales;