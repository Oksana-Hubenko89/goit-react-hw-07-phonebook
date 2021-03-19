import React from 'react';
import Container from "../Container";
import { connect } from "react-redux";
import s from "../ContactForm/ContactForm.module.css";
import q from '../ContactList/ContactList.module.css';
import { contactsSelectors,contactsActions } from '../../redux/contacts';

const Filter = ({ value, onChange }) =>
<Container>
    <label className={q.contact}>
        Find contacts by name <br/>
        <input className={s.Input} value={value} type="text" placeholder='Name or Surname' onChange={onChange} />
    </label> 
</Container>;

const mapStateToProps = state => ({
    value:contactsSelectors.getFilter(state) ,
})
const mapDispatchToProps =dispatch=> ({
onChange: event=>dispatch(contactsActions.changeFilter(event.target.value))
})

export default connect(mapStateToProps,mapDispatchToProps)(Filter);