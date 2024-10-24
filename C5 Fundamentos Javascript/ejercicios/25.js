function combinarNombres(nombre, apellido) {
  // La función recibe dos argumentos llamados "nombre" y "apellido" los cuales son string.
  // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
  // Por ejemplo: 
  // "Soy", "Henry" ---> "Soy Henry"
  // Tu código:
  return nombre + " " + apellido;

}
let nom1 = "Carlos"
let nom2 = "Camacho"
console.log(combinarNombres(nom1, nom2));


module.exports = combinarNombres;
