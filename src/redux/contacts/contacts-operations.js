import axios from "axios";
import actions from './contacts-actions';

const { fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError
} = actions;

axios.defaults.baseURL = 'http://localhost:4040';

const fetchContacts = () => async dispatch => {
    dispatch(fetchContactsRequest());

    try {
        const { data } = await axios.get('/contacts');
        dispatch(fetchContactsSuccess(data));
    } catch( error ) {
        dispatch(fetchContactsError(error.message));
    }
};

const addContact = (name, number) => async dispatch => {
    
    const contact = {
        name,
        number       
    };

    dispatch(addContactRequest());

    try {
        const { data } = await axios.post('/contacts', contact);
        dispatch(addContactSuccess(data));
    } catch (error) {
         dispatch(addContactError(error.message))
    }
    // axios.post('/contacts', contact)
    //     .then(({ data} ) => dispatch(addContactSuccess(data)))
    //     .catch(error => dispatch(addContactError(error.message)));
};

const deleteContact = contactId => dispatch => {

    dispatch(deleteContactRequest());

    axios.delete(`/contacts/${contactId}`)
        .then(() => dispatch(deleteContactSuccess(contactId)))
        .catch(error => dispatch(deleteContactError(error.message)));
};

export default {
    fetchContacts,
    addContact,
    deleteContact
};