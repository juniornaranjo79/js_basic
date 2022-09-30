//Functions

//Funciones normales
//function saludar(){
//    return "Hola mundo"
//}

//Funciones asignadas
//const saludar = function() {
//    return "Hola mundo"
//}

//Funcion flecha
// funcion flecha simplificada
//const saludar = ( nombre ) => "Hola " +  nombre
//const getUser = () => ({ uid: "AC12345", username: "Tony0079"}) // los parentecis le dicen al programa que lo que se retorna es un objeto
const saludar = ( nombre ) => {
    return "Hola " +  nombre
}


//Argumento: que se pasa a la funcion
const nombre = "Tony"

//console.log( saludar(nombre) );


//Ejercicio

const heroes = [{
    id: 1,
    name: "Batman"
},{
    id: 2,
    name: "Superman"
}]

//const existe = heroes.some( ( heroe ) => heroe.id === 1 );
const existe = heroes.find( ( heroe ) => heroe.id === 1 );

console.log(existe);