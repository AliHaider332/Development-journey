import { createStore } from 'redux';
import { dummyReducer } from './Reducers/tempReducer';
const storeApna = createStore(dummyReducer);
export default storeApna;
