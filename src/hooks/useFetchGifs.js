import { useEffect, useState } from "react"
import {getGifs} from '../helpers/getGifs';



//TODO: Creacion de un custom hook
export const useFetchGifs = (category) => {
//TODO: useEffect() permite ejecutar codigo de manera condicional. En primer lugar recibe la funcion a ejecutar, coma y luego un arreglo de dependencias. Por ejemplo para que el codigo se ejecute una sola vez solo habria que colocar [] despues de la funcion de callback y problema resuelto.

  const [state, setstate] = useState({
    data: [],
    loading: true
  });

  useEffect(() => {
//TODO: Los efectos no puden ser Async porque esperan algo sincrono
    getGifs( category )
      .then( imgs => {

          setstate({
            data: imgs,
            loading: false
          });



      })

//TODO: para evitar que la categoria cambie, se coloca la categoria entre los corchetes de abajo
    }, [category])



  return state;
}
