export const handleAuthentication = (status) => {
  return {
    type: 'Authenticated',
    payload: status,
  };
};

export const handleLoading = () => {
  return {
    type: 'handleLoading',
    payload: '',
  };
};
