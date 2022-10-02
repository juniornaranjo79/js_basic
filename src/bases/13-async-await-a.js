//Async - Await
//Async convierte las funciones en funciones que retornan una promesa
const miPromesa = () =>{
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve('Tenemos un valor en la promesa')
            //reject('Reject en miPromesa')
        }, 1000)
    })
}

const medirTiempoAsync = async() => {

    try {
        console.log('Inicio');
    
        const respuesta = await miPromesa()
        console.log(respuesta);
    
        console.log('Fin');
    
        return 'Fin de medir tiempo async'
        //throw 'Error en medir tiempo async' 
        //===> en las funciones async el trow entra por el .cacth 
    }
    catch (error){
        //return 'catch en medirTiempoAsync'
        //===>en las funciones async el return entra por el .then
    }
}


medirTiempoAsync()
    .then( valor => console.log( valor ) )
    .catch( err => console.log(err) )