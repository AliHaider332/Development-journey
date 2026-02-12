import { combineReducers, createStore } from 'redux';
import { dummyReducer, tempReducer } from './Reducers/tempReducer';

const addReducers = combineReducers({ dummyReducer, tempReducer });

const storeApna = createStore(addReducers);
export default storeApna;
