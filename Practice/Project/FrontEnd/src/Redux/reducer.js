const initialState = {
  auth: false,
  loading: false,
};

export const firstReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Authenticated':
      return {
        ...state,
        auth: action.status,
      };

    case 'handleLoading':
      return {
        ...state,
        loading: !state.loading,
      };

    default:
      return state;
  }
};
