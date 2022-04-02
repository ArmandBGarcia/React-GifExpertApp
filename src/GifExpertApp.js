import React, {useState} from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Madara',])
//   const handleApp = () => {
// //TODO: Para anadir una nueva categoria es necesario usar el spred operator para acceder a las categorias y no pisarlas con la nueva insercion
//     setCategories([...categories, 'Dragon Ball'])
//   }

  return (
      <>
        <h1>GifExpertApp</h1>
        <AddCategory setCategories={setCategories} />
        <hr />

        <ol>
          {categories.map(category => 
          <GifGrid 
          key={category}
          category={category} 
          /> 
          )}
        </ol>
      </>
    )
}

export {
  GifExpertApp
}