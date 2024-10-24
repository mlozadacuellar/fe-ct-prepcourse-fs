function esTipoDato(valor) {
  // La función recibe un argumento llamado valor.
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código:
  return typeof valor;
}
let miNumero = 42
let miString = "hola mundo"
let miBooleano = true;

console.log(esTipoDato(miNumero));
console.log(esTipoDato(miString));
console.log(esTipoDato(miBooleano));


module.exports = esTipoDato;