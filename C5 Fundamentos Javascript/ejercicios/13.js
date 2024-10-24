function menosQueNoventa(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es menor que noventa.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 50 ---> true
  // 91 ---> false
  // Tu código:
  if (num < 90) {
    return true;
  } else {
    return false;
  }
}
let numero1 = 77;
let numero2 = 97;
let numero3 = 45;

console.log(menosQueNoventa(numero1));
console.log(menosQueNoventa(numero2));
console.log(menosQueNoventa(numero3));

module.exports = menosQueNoventa;