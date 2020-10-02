import { Action, ActionType, createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Auth } from './auth.model';



export enum AuthActionTypes {
  LOGIN = '[Login Component] Login',
  LOGOUT = '[Logout Component] Logout'
}

export class login implements Action {
  readonly type = AuthActionTypes.LOGIN;
  constructor(public payload: {authToken: string}) {}
}

export class logout implements Action {
  readonly type = AuthActionTypes.LOGOUT;
  constructor(public payload: {authToken: any}) {}
}

export type AuthActions = login | logout;
