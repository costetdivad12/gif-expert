import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategories = ({setCategorias}) => {
    
  const [inputValue, setinputValue] = useState('');
  let text = inputValue.toUpperCase();
  const handleInputChage = (e) => {
    // console.log(e.target.value);
    setinputValue(e.target.value);
  };

  const handleSummit= (e)=>{
       e.preventDefault();
      console.log('summit hecho ',e);
      if(inputValue.trim().length>2){

          setCategorias(categoria => [ text,...categoria]);
          setinputValue('')
      }
  }

  return (
    <>
      <form onSubmit={handleSummit}>
      <h3>{text}</h3>
      <input type="text" value={inputValue} onChange={handleInputChage} />
      </form>
    </>
  );
};

AddCategories.propTypes = {
    setCategorias: PropTypes.func.isRequired

};

export default AddCategories;
