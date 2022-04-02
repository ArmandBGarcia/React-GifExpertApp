import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import {useState, useEffect} from 'react'
import { GifGridItem } from './GifGridItem'


export const GifGrid = ({category}) => {

const {data:images, loading} = useFetchGifs(category);

  return (
    <>
    <h3 className='animate__animated animate__fadeIn'>{category}</h3>
{/* //TODO: Condicion logica &&, se evalua la primer exprecion y si es verdadera retorna la siguiente expresion */}
    {loading && <p className='animate__animated animate__flash'>Loading</p> }
    <div className='card-grid'>
        {
          images.map( img => (
            <GifGridItem 
            key={img.id}
//TODO: En el la linea de abajo se esta utilizando el spred para mandar cada una de las propiedades, de esta manera se esta mandando cada una de las propiedades de las imagenes como una propiedad independiente 
            {...img}
            />
          ))
        }
    </div>
    </>
  )
}
