import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';

import App from './components/app/app';
import rootReducer from './store/root-reducer';
import reportWebVitals from './reportWebVitals';
import {redirect} from './middlewares/redirect';

const store = configureStore({
  reducer: rootReducer,
  middleware: [redirect],
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
