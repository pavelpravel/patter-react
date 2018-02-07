import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';


import configureStore from './store';



/*/const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
        thunkMiddleware,
        logger
    )
)/*/



const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
