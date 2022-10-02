import { getHeroById } from './bases/08-imp-exp'
//Promesas
//las pormesas son asincronas la naturaleza de ellas

/* console.log( 'Inicio' );
//Creacion de promesa normal
new Promise( (resolve, reject) => {
    console.log('cuerpo de la promesa');
    reject( 'Promesa resuelta con error' )
})
.then( msg => console.log( msg ))
.catch( err => console.log( err ))

console.log( 'Fin' ); */

const getHeroByIdAsync = ( id ) => {
    return new Promise( (resolve, reject) =>{
        setTimeout(() =>{
            const heroe = getHeroById( id )
            if ( heroe ){
                resolve( heroe )
            }
            else{
                reject( 'El heroe no existe' )
            }
        }, 1000);
    });
}

getHeroByIdAsync(3)
    .then(heroe => {  
        console.log(`El heroe es: ${ heroe.name }`)
    })
    .catch(err => console.log(err))