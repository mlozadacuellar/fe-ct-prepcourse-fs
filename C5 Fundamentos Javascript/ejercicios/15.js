function esPar(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es par.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 14 ---> true
  // 15 ---> false
  // Tu código:
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let nume1 = 24
let nume2 = 31

console.log(esPar(nume1));
console.log(esPar(nume2));



module.exports = esPar;
