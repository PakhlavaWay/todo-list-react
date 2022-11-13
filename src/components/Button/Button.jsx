import React from 'react';
import classes from './Button.module.css'

const Button = ({children, ...props}) => {
  return (
    <div>
      <button className={classes.delete} {...props}>{children}</button>
    </div>
  );
};

export default Button;