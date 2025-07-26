import { createStore } from 'redux';

const initialState = {
  counter: 0,
  privacy: false
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
          return { ...state, counter: state.counter + 1 };
      
        case 'DECREMENT':
          return { ...state, counter: state.counter - 1 };
      
        case 'ADD':
          return { ...state, counter: state.counter + action.payload };
      
        case 'SUBTRACT':
          return { ...state, counter: state.counter - action.payload };
      
        case 'mode':
          return { ...state, privacy: !state.privacy };
      
        default:
          return state;
      }
      
};

const reduxStore = createStore(counterReducer);
export default reduxStore;
