function esPositivo(num) {
  // La función recibe un argumento llamado num el cual es un numero entero.
  // Retorna como resultado un string que indica si el número es positivo o negativo.
  // Por ejemplo: 
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:
  if (num > 0) {
    return num = "Es positivo";
    
  } else if (num === 0){
    return false;
  } else {
    return num = "Es negativo";
  
  }
}
let nume1 = 27
let nume2 = -25
let nume3 = -45
let nume4 = 0

console.log(esPositivo(nume1));
console.log(esPositivo(nume2));
console.log(esPositivo(nume3));
console.log(esPositivo(nume4));


module.exports = esPositivo;