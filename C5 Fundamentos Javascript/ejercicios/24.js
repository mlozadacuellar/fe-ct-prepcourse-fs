function agregarSimboloExclamacion(str) {
  // La función recibe un argumento llamado str el cual es un string.
  // Agrega un símbolo de exclamación al final del string str y retórnalo.
  // Por ejemplo: 
  // "hello world" ---> "hello world!"
  // Tu código:
  return (str + "!");

}
let string1 = "Necesito Ayuda"
let string2 = "Estoy Aquí"
console.log(agregarSimboloExclamacion(string1));
console.log(agregarSimboloExclamacion(string2));

module.exports = agregarSimboloExclamacion;
