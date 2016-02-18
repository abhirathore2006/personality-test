import  { applyMiddleware, compose, createStore } from 'redux' ;
import reducer from './reducer';
import logger from 'redux-logger';

let fincalCreateStore = compose(
    applyMiddleware(logger())
    )(createStore)
    
export default function configureStore(initialState ={ answer:[]}){
    return fincalCreateStore(reducer,initialState)
}

