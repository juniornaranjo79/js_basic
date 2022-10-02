//Importacion y exportaciones 
//importacion con desestructuracion
import { owners } from '../data/heroes'
//Importacion por defecto
import heroes from '../data/heroes'

//getHeroById ( id )
//funciones flecha 
//find
export const getHeroById = ( id ) => {
    return heroes.find( ( heroe ) => heroe.id === id);
}

//getHeroesByOwner ( DC, MARVEL )
//funciones flecha 
export const getHeroesByOwner = ( owners ) => {
    return heroes.filter(heroe => heroe.owner === owners )
}