// '' comillas simples 
// `` comillas invertidas
// ${ nombre } = expresion de Js

const nombre = 'Jairo'
const apellido = "Naranjo"

const nombreCompleto = `${ nombre } ${ apellido }`

console.log(nombreCompleto);

function getSaludo ( nombre, apellido ) {
    return 'Hola ' + nombre + ' ' + apellido
}

console.log(`Este es un texto: ${ getSaludo(nombre, apellido) }`);




