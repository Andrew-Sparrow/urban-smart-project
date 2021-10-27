import {createReducer} from '@reduxjs/toolkit';

import {
  changeLogin,
  changePassword,
  changeAuthorizationStatus,
  logout
} from '../actions';

import {AuthorizationStatus} from '../../const';

const initialState = {
  login: '',
  password: '',
  authorizationStatus: AuthorizationStatus.NO_AUTH
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(changeLogin, (state, action) => {
      state.login = action.payload;
      localStorage.setItem('login', action.payload);
    })
    .addCase(changePassword, (state, action) => {
      state.password = action.payload;
      localStorage.setItem('password', action.payload);
    })
    .addCase(changeAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(logout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
      state.login = '';
      state.password = '';
      localStorage.removeItem('login');
      localStorage.removeItem('password');
    });
});

export {user};
