import React, {Component} from 'react'
import PageHeading from '../../components/PageHeading';
import ContactList from '../../components/ContactList';
import s from '../../components/ContactList/ContactList.module.css';
import ContactForm from '../../components/ContactForm';
import {CSSTransition} from "react-transition-group";
import stylesHomePage from "./HomePage.module.css";
import Filter from '../../components/Filter ';
import StyleFilter from '../../components/Filter /Filter.module.css';
import { connect } from "react-redux";
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

class HomePage extends Component {

  static defaultProps = {
    //   
  }
  static propTypes = {
   //
  }
  state = {
    error: false,
    message:'',
  };

  componentDidMount(){
    this.props.fetchContacts();
  };

   handleSubmit = () => {
         this.setState({error:true})
    };
  resetError=()=>{
    this.setState({error:false})
  };
  
  render() {
    const { message} = this.state;
    const { contacts } = this.props;
    return (
          <div >

        
          <CSSTransition classNames={stylesHomePage}  in={true} appear  timeout={500} unmountOnExit>
          <PageHeading text="Phonebook" />
          </CSSTransition>
          <ContactForm onSubmitContact={()=>{this.handleSubmit(message)}} onResetError={()=>{this.resetError()}}/>
          <h2 className={s.contact}>Contacts</h2>
          <CSSTransition classNames={StyleFilter} in={contacts >1}
            timeout={250} unmountOnExit > 
          <Filter /> 
        </CSSTransition>
        {this.props.isloadingContacts && <h1>Загружаем...</h1>}
          <ContactList /> 

          </div>  
    ) 
  }
}
const mapStateToProps = (state) => ({
  contacts:contactsSelectors.getTotalContactCount(state) ,
  isloadingContacts:contactsSelectors.getLoading(state),
 
});
const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts())
});

export default connect(mapStateToProps, mapDispatchToProps) (HomePage);
