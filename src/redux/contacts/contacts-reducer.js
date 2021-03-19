import { combineReducers } from "redux";
import {createReducer} from '@reduxjs/toolkit';
import actions from './contacts-actions';

const { fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    changeFilter } = actions;

const items = createReducer([], {
    [fetchContactsSuccess]:(_,{payload})=>payload,
    [addContactSuccess]:(state,{payload})=>[payload,...state],
    [deleteContactSuccess]:(state,{payload})=>
    state.filter(({id})=>id !== payload),
});
    

const filter=createReducer('', {
    [changeFilter]:
    (_,{payload})=>payload,
});
 
const loading = createReducer(false, {
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false,
    [fetchContactsRequest]: () => true,
    [fetchContactsSuccess]: () => false,
    [fetchContactsError]: () => false,
});

const error = createReducer(null, {});

export default combineReducers ({
    items,
    filter,
    loading,
    error
});

