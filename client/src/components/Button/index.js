import React from 'react';
import "./style.css";

export const Button = ({
  onClick, 
  type, 
}) => {

  return (

      <button onClick={onClick} type={type}> CHALLENGE</button>
    
  )
};



