import React from "react";

const InputField = (props) => {
  const handleChange = (e) =>{
    const {handleChange} = props;
    handleChange(e.target.value);
  }
  
  const {type,placeholder,value} = props;

  return (
    <input 
        type={type} 
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
    />
  )
}

export default InputField;