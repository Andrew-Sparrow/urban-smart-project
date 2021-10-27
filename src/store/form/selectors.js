import {NameSpace} from '../root-reducer';

export const getLogin = (state) => state[NameSpace.FORM].login;
export const getPassword = (state) => state[NameSpace.FORM].password;
