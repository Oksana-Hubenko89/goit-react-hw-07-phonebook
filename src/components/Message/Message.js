import React from 'react';
import styles from './Message.module.css';
import {CSSTransition} from "react-transition-group";
import StyleMessage from '../../components/Message/Message.module.css'; 
import PropTypes from 'prop-types';

const Message=({ message }) =>{
  return (
  <CSSTransition classNames={StyleMessage}  in={message} appear  timeout={250} unmountOnExit>
  <div className={styles.message}><p >{message}</p></div> 
    </CSSTransition>  
  )
}
 
 Message.propTypes={
   message:PropTypes.string,
   };
 
 export default Message;