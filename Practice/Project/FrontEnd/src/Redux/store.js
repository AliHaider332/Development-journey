import { createStore } from 'redux';
import { firstReducer } from './reducer';
export const storeModle = createStore(firstReducer);
