import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/rootReducer';
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk';

const logger = createLogger();

export default function configureStore(preloadedState) {
 return createStore(
   rootReducer,
   preloadedState,
   applyMiddleware(
     thunkMiddleware,
     logger
   )
 )
}
