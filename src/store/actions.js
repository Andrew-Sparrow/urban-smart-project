import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_LOGIN: 'authorization/changeLogin',
  CHANGE_PASSWORD: 'authorization/changePassword',
};

export const changeLogin = createAction(
  ActionType.CHANGE_LOGIN,
  (login) => ({payload: login})
);

export const changePassword = createAction(
  ActionType.CHANGE_PASSWORD,
  (password) => ({payload: password})
);
