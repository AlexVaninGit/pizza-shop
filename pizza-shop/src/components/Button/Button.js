import React from "react";

const Button = ({cart, children, className, outline}) => {

    console.log(cart)
  return (
    <button className={`button ${className} ${outline && 'button--outline'}`}>
      {children}
    </button>
  );
};


export default Button
