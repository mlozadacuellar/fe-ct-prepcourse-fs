function obtenerResto(x, y) {
  // La función recibe dos argumentos llamados "x" e "y" que son números.
  // Retorna el resultado del resto de la division de estos argumentos.
  // Por ejemplo: 
  // 10, 5 ---> 0
  // 16, 5 ---> 1
  // Tu código:
  return (x) % (y);


}

let num1 = 12
let num2 = 7
let num3 = 3
console.log(obtenerResto(num1, num3));
console.log(obtenerResto(num1, num2));

module.exports = obtenerResto;