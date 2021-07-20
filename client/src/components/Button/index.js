import React from 'react';
import "./style.css";
import { Link } from "react-router-dom";

// Button styles
const STYLES = ["btn--primary"];

const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  onClick, 
  buttonStyle, 
  buttonSize, 
  type, 
  children
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

  // Link for the button & button component
  return (
    <Link to="/sign-up" className="btn-page">
      <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
      >
        {children}
      </button>
    </Link>
  )
};

