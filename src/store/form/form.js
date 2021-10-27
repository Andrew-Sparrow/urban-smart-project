import {createReducer} from '@reduxjs/toolkit';

import {
  changeLogin,
  changePassword
} from '../actions';

const initialState = {
  login: '',
  password: ''
};

const form = createReducer(initialState, (builder) => {
  builder
    .addCase(changeLogin, (state, action) => {
      state.login = action.payload;
    })
    .addCase(changePassword, (state, action) => {
      state.password = action.payload;
    })
});

export {form};
