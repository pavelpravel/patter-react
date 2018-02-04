import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers/rootReducer';
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk';


const logger = createLogger();
const store = createStore(rootReducer,
    applyMiddleware(
        thunkMiddleware, logger
    )
)


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
