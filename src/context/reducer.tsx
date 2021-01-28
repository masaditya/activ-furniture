const Reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        userData: action.data.userData,
      };

    case 'LOGOUT':
      return {
        ...state,
        userData: null,
      };
    default:
      return state;
  }
};

export default Reducer;
