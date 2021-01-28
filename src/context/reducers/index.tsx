import {
  RESTORE_TOKEN,
  LOGIN_SUCCESS,
  RESTORE_FAILED,
  LOGOUT_SUCCESS,
} from '../actionTypes';

export const rootReducer = (prevState: any, action: any) => {
  switch (action.type) {
    case RESTORE_TOKEN:
      return {
        ...prevState,
        user: action.payload.user,
        isLoading: false,
        isSignout: false,
      };
    case RESTORE_FAILED:
      return {
        ...prevState,
        token: null,
        isLoading: false,
        isSignout: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...prevState,
        isSignout: false,
        user: action.payload.user,
      };
    case LOGOUT_SUCCESS:
      return {
        ...prevState,
        isSignout: true,
        user: null,
      };
    default:
      return {
        ...prevState,
      };
  }
};
