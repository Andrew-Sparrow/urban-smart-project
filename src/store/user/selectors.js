import {NameSpace} from '../root-reducer';

export const getLogin = (state) => state[NameSpace.USER].login;
export const getPassword = (state) => state[NameSpace.USER].password;
export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
