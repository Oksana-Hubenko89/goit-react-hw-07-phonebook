import { createSelector } from "reselect";

const getLoading = state => state.contacts.loading;
const getFilter = state => state.contacts.filter;
const getAllContacts = state => state.contacts.items;

const getTotalContactCount = createSelector (
    [getAllContacts],
    // const contacts = getAllContacts(state);
    (contacts)=>{
    return contacts.length;}
);
const getvisibleContacts = createSelector(
    [getAllContacts, getFilter],

    (contacts, filter) => {
        console.log("filter");
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter),
    );
    },    
);


export default {
    getLoading,
    getFilter,
    getvisibleContacts,
    getTotalContactCount,
    getAllContacts,
}