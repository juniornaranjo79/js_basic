//Async y await
import giphyApi from './bases/12-axios'

const getImages = async() => {
    try {
        const { data } = (await giphyApi.get('/random')).data //Poniendo el await dentro de parentesis hace que se espera qeu se resuelva la funcion y con el punto .data le digo quiero la propiedad data de esa resolucion  
        const { url } = data.images.original
        //console.log(url);

        const img = document.createElement('img')
        img.src = url

        document.body.append( img )
    } catch (error) {
        console.log('Error en la peticion', error);
        throw error
    }
}

getImages()

//console.log('Hola mundo');