function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:
  if ( letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
    return letra = "Es vocal";
  } else {
    return letra = "Dato incorrecto";
  }
}
let dato1 = "a"
let dato2 = "t"
let dato3 = "SoyNuevo"
let dato4 = "u"

console.log(esVocal(dato1));
console.log(esVocal(dato2));
console.log(esVocal(dato3));
console.log(esVocal(dato4));


module.exports = esVocal;
