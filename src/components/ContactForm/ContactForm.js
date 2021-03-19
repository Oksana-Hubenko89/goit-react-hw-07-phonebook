
import React, { Component } from 'react';
import Container from "../Container";
import b from "../Button/Button.module.css";
import s from "./ContactForm.module.css";
import { connect } from "react-redux";
import q from '../ContactList/ContactList.module.css';
import Message from '../../components/Message';
import PropTypes from 'prop-types';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

class ContactForm extends Component {

  static propTypes = {
   contacts:PropTypes.arrayOf(PropTypes.object),
   onSubmit:PropTypes.func,
  }

    state = {
        name: '',
        number: '',
        message:null,
    }

errorMessage=(event)=>{
    this.setState({message:event});
    setTimeout(() => {
      this.setState({message:null})  
    }, 2500);
}

    handleInputChange = event => {
        const {name, value}= event.currentTarget;
        this.setState({[name]:value})
    };
    
    handleSubmit = (event) => {
        event.preventDefault();

        const {name,number}=this.state;
        const {onSubmit, contacts}=this.props;

        if (name.trim() ===''){
            this.errorMessage('Введите имя контакта')
        return;
        }          
       if(number.trim() ===''  ){
            this.errorMessage('Введите номер контакта')
        return;
         }
        if (contacts.find( item => item.name.toLowerCase() === name.toLowerCase())){
           this.errorMessage('Контакт существует')
        return;  
        }
         onSubmit(name, number);

         this.setState({
            name: '',
            number: ''
        })
    };
    
    
    render(){ 
    
        const { name, number,message } = this.state;

        return (
            
        <Container>
          
          <Message message={message}/>
        
            <form className={s.Form} onSubmit={this.handleSubmit}>
                <label className={q.contact}>
                  Name <br/> <input className={s.Input} type="text" name="name" value={name}  placeholder='Name Surname' onChange={this.handleInputChange }/>
                </label>
                <br/>
                <label className={q.contact}>
                  Number <br/> <input className={s.Input} type="tel" name="number" value={number} placeholder='+38 ( 000 ) 000 - 00 - 00' onChange={this.handleInputChange}/>
                </label>
                <br/>
                <button className={b.Button} type='submit'>Add contact</button>
       
            </form>
            
       </Container>
        )
    }      
};
 const mapStateToProps = (state) => ({
 contacts: contactsSelectors.getAllContacts(state),
});
const mapDispatchToProps = dispatch => ({

    onSubmit:  (name,number) => dispatch(contactsOperations.addContact(name,number)),
})

export default connect( mapStateToProps,mapDispatchToProps)(ContactForm);
