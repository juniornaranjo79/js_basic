//Desestructuracion de objetos
const person = {
    name: "Tony",
    age: 45,
    codeName: "Ironman"
}

//asi queda el objeto person queda desestructurado
const { name, age, codeName } = person

/* console.log( name );
console.log( age );
console.log( codeName ); */

// Desestructuracion en funciones
// desestructuracion utilizando una constante 
/* const createHero = ( person ) => {

    const { name, age, codeName, power } = person
    return{
        id: 1234567890,
        name: name,
        age: age,
        codeName: codeName,
        power: power
    }
} */
// Desestructuracion recibida como parametros
/* const createHero = ( { name, age, codeName, power } ) => {

    return{
        id: 1234567890,
        name: name,
        age: age,
        codeName: codeName,
        power: power
    }
} */
const createHero = ( { name, age, codeName, power } ) => 
    ({ 
        id: 1234567890, 
        name: name, 
        age: age, 
        codeName: codeName, 
        power: power 
    })

console.log( createHero( person ));