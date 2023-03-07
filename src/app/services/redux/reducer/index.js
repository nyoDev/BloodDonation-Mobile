const initialState = {
  skippedStatus: '',
  authenticationState: 'unAuthenticated',
  userInfo: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'changeToAuthenticated':
      return {
        ...state,
        authenticationState: action.payload,
      };
    case 'changeToUnAuthenticated':
      return {
        ...state,
        authenticationState: action.payload,
      };
    case 'setUserInfo':
      return {
        ...state,
        userInfo: action.payload,
      };
    case 'signOut':
      return {
        ...state,
        userInfo: action.payload.userInfo,
        authenticationState: action.payload.authenticationState,
      };

    default:
      return state;
  }
};

export default reducer;
