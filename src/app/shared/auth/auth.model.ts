import { User } from './user.model';

export interface Auth {
  loggedIn?: boolean;
  authToken?: string;
  user?: User;
}


export interface DataLogin {
  username: string;
  password: string;
}
export interface DataRegister {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
}
