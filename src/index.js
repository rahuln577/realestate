import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { HashRouter ,BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineSlices, configureStore } from '@reduxjs/toolkit';
import reducer from './Redux/listingsStore'
import { userReducer } from './Redux/userStore';
import App from './App';

let store = configureStore({
  reducer:combineSlices({
    listings:reducer,
    user:userReducer
  })
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </HashRouter>
  </React.StrictMode>
);


