//Desestructuracion de array

const characters = ['Goku', 'Vegeta', 'Trunks']

//const goku = characters[0]
//const vegeta = characters[1]
//const trunks = characters[2]

//Ejemplo de desestructuracion de array 
const [goku, vegeta, trunks ] = characters

//console.log(goku, vegeta, trunks);

//Desestructuracion de un arreglo en una funcion
//const returneArray = () => {
//    return [ 'ABC', 123 ]
//}

//Desestructuracion de un arreglo en una funcion con argumentos
const returneArray = ([ letters, numbers ]) => {
    return [ letters, numbers ]
}

const [ letters, numbers ] = returneArray([ 'ASD', 789 ])

console.log( letters, numbers );