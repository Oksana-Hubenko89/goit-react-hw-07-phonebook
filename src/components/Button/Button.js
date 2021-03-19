import React from 'react';
import s from './Button.module.css';

const Button = ({ children}) =>
<button className={s.Button} >{children}</button>;
  

export default Button;