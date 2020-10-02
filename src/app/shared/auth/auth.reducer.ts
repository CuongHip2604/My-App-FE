import { User } from './user.model';
import { AuthActions, AuthActionTypes } from './auth.actions';

export const authsFeatureKey = 'auths';

export interface AuthState {
  loggedIn: boolean;
  authToken: string;
  user: User;
}

export const initialAuthState: AuthState = {
  authToken: null,
  loggedIn: false,
  user: null
};

export function authReducer(state = initialAuthState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return {
        ...state,
        loggedIn: true,
        authToken: action.payload.authToken,
        user: undefined
      };
    case AuthActionTypes.LOGOUT:
      return {
        ...state,
        loggedIn: false,
        authToken: action.payload.authToken,
        user: undefined
      };
    default:
      return state;
  }
}
