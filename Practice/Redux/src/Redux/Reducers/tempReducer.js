const initialState = { product: [], count: 0 };

export const dummyReducer = (state = initialState, action) => {
  if (action.type === 'ADD') {
    console.log('Hi i am Called', action.payload);
    state = { ...state, product: [...state.product, action.payload] };
    return state;
  } else if (action.type === 'COUNT') {
    state = { ...state, count: state.count+1 };
    return state;
  } else {
    return state;
  }
};
