import React from 'react';
import s from "./ContactList.module.css";
import b from '../Button/Button.module.css';
import Container from "../Container";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import {contactsSelectors, contactsOperations} from '../../redux/contacts/';

const ContactList = ({ contacts, onDelete}) =>(
    
    <Container>
   
                  <TransitionGroup component="ul" className={s.List} >
              
            {contacts.map(({ id, name, number }) =>
                <CSSTransition key={id} classNames={s} timeout={250}>
                <li className={s.contact} key={id} ><span>{name}: {number} </span>
                  <button className={b.Button} type="button" onClick={() => onDelete(id)} >Delete</button>
                </li>
                 </CSSTransition>
            )}           
           
            </TransitionGroup>
          
             
  </Container>);
 
const mapStateToProps = (state) => ({
 contacts:contactsSelectors.getvisibleContacts(state),
 
});

const mapDispatchToProps = dispatch => ({
  onDelete: id =>dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList); 