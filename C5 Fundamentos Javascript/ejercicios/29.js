function areaDelTriangulo(base, altura) {
  // La función recibe dos argumentos llamados "base" y "altura" los cuales son numeros.
  // Retornar el área de un triangulo teniendo su base y altura.
  // Por ejemplo: 
  // 10, 5 ---> 25
  // 0, 10 ---> 0
  // Tu código:
  return (base * altura)/ 2;
}
let number1 = 8
let number2 = 7
let number3 = 4
console.log(areaDelTriangulo(number1, number2));
console.log(areaDelTriangulo(number1, number3));
console.log(areaDelTriangulo(number2, number3));

module.exports = areaDelTriangulo;
