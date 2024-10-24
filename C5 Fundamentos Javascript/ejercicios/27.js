function obtenerAreaRectangulo(alto, ancho) {
  // La función recibe dos argumentos llamados "alto" y "ancho" los cuales son numeros.
  // Retornar el área de un rectángulo teniendo su alto y ancho.
  // Por ejemplo: 
  // 2, 2 ---> 4
  // 0, 2 ---> 2
  // Tu código:
  return alto * ancho; 
}
let medida1 = 3
let medida2 = 4
let medida3 = 6

console.log(obtenerAreaRectangulo(medida1, medida2));
console.log(obtenerAreaRectangulo(medida1, medida3));
console.log(obtenerAreaRectangulo(medida2, medida3));

module.exports = obtenerAreaRectangulo;
