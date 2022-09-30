//objetos literales
//los objetos son pasados por referencia (todo modificacion que sufra el objeto lo afectara)
//operador expred (...)
const persona = {
    nombre: "Tony",
    apellido: "Stark",
    edad: 45,
    direccion:{
        ciudad: "NY",
        pais: "estados unidos"
    }
}

const persona2 = { ...persona }

persona2.nombre = "Peter"

console.log(persona);
console.log(persona2);


