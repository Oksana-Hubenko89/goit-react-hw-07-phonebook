import React from 'react';
import './index.css';
import { Provider } from 'react-redux'
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import { render } from 'react-dom';
//import { PersistGate} from 'redux-persist/integration/react';

render(
  <React.StrictMode>
   <Provider store={ store}>
   {/* <PersistGate loading="Загружаем" persistor={store.persistor}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </PersistGate> */}
    </Provider>
    </React.StrictMode>
 ,
  document.getElementById('root')
)
