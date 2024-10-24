function mayorQueCincuenta(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es mayor que cincuenta.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 51 ---> true
  // 15 ---> false
  // Tu código:
  if (num > 50) {
    return true;
  } else {
    return false;
  }
}
let dato1 = 67;
let dato2 = 34;
let dato3 = 51;

console.log(mayorQueCincuenta(dato1));
console.log(mayorQueCincuenta(dato2));
console.log(mayorQueCincuenta(dato3));

module.exports = mayorQueCincuenta;
