import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_LOGIN: 'authorization/changeLogin',
  CHANGE_PASSWORD: 'authorization/changePassword',
  CHANGE_AUTHORIZATION_STATUS: 'user/changeAuthorizationStatus',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'user/redirectToRoute',
};

export const changeLogin = createAction(
  ActionType.CHANGE_LOGIN,
  (login) => ({payload: login})
);

export const changeAuthorizationStatus = createAction(
  ActionType.CHANGE_AUTHORIZATION_STATUS,
  (status) => ({payload: status}),
);

export const changePassword = createAction(
  ActionType.CHANGE_PASSWORD,
  (password) => ({payload: password})
);

export const redirectToRoute = createAction(
  ActionType.REDIRECT_TO_ROUTE,
  (url) => ({payload: url}),
);

export const logout = createAction(ActionType.LOGOUT);
