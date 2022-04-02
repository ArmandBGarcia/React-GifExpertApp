import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

  const  [inputValue, setinputValue] = useState('')
  const handleInputChange = (e) => {
    setinputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    //TODO: para prevenir el comportamiento por defecto de los formularios se usa la funcion preventDefault()
    e.preventDefault();
//TODO: Validacion para que no se pueda enviar undefined o string vacio en el input
    if(inputValue.trim().length > 2){
      setCategories(categ => [inputValue, ...categ]);
      setinputValue('');
    }
  }

  return(
//TODO: La funcion atributo onChange se dispara cuando hay un cambio
    <form onSubmit={handleSubmit}>
      <input 
        type='text'
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}