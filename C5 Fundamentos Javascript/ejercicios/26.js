function obtenerSaludo(nombre) {
  // La función recibe un argumento llamado nombre el cual es un string. 
  // Toma el string "nombre" y concatena otros string en la cadena para que tome la siguiente forma:
  // Ejemplo: "Martin" ---> "Hola Martin!"
  // Retorna el nuevo string. 
  // Tu código:
  return "Hola" + " " + nombre + "!";

}

let nom1 = "Javier"
let nom2 = "Hector"
console.log(obtenerSaludo(nom1));
console.log(obtenerSaludo(nom2));

module.exports = obtenerSaludo;