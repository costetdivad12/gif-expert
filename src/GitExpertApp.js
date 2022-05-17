import React, { useState } from 'react'
import PropTypes from 'prop-types'

const GitExpertApp = props => {

  //  const categorias =['Sistemas','Pagos','Administracion'];
  const [categorias, setCategorias] = useState(['Sistemas','Pagos','Administracion']);

  const handleAdd=()=>{
    //puede que se use de esta forma 
    // setCategorias(['Juridico',...categorias]);
    //o se puede utilizar de esta otra
    setCategorias(categoria=> ['Juridico',...categoria]);
  };

  return (
    <>
    <h2>GitExpertApp</h2>
    <hr/>
    <button onClick={ handleAdd }>Agregar</button>
     <ol>
        {
          categorias.map( ( categoria,i )=>{
              return <li key={categoria}> {categoria}</li>
          } )
        }
     </ol>
    </>
  )
}

GitExpertApp.propTypes = {}

export default GitExpertApp