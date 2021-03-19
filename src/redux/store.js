import todosReducer from './contacts/contacts-reducer';
import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
FLUSH,
REHYDRATE,
PAUSE,
PERSIST,
PURGE,
REGISTER, 
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';


const middleware = [
    ...getDefaultMiddleware({
    serializableCheck:{
    ignoredActions:[
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER, 
        ],
    }
}), logger,
];

const store = configureStore({
    reducer:{
        contacts: todosReducer,
        },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

// const persistor = persistStore(store);
// const store = createStore(rootReducer, composeWithDevTools());

export default store;