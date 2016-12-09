import React from 'react';
import ReactDOM from 'react-dom';
// import { signup, login, logout } from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';

// window.signup = signup;
// window.login = login;
// window.logout = logout;
// window.store = configureStore();


document.addEventListener('DOMContentLoaded', () => {
let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={ store } />, root);
});
