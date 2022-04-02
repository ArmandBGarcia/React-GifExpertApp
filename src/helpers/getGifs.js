//TODO: Una carpeta helper contiene funciones que vann hacer un cierto trabajo en especifico, que no hace falta que redibujen el state


  export const getGifs = async(category) => {
    //TODO: encodeURI() es una funcion de JS que reemplaza los espacios por porcentajes u otros simbolos
        const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${ encodeURI(category) }&api_key=CGyWqXpqlT7GNNA8401GnAAszaJUCdGG`
        const resp = await fetch(url);
        const {data} = await resp.json();
    
        const gifs = data.map( img => {
          return {
            id: img.id,
            title: img.title,
    //TODO: Se puede colocar el signo ? despues del nombre de algun objeto paraa asegurarse de que contenga el elemento buscado, por ejemplo: url: img.images?.downnsize...
            url: img.images?.downsized_medium.url
          }
        })
        return gifs;
      }