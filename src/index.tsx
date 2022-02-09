/*
 * @LastEditors: night
 * @Author: night
 */
import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/svg-icon/index";//引入svg
import './index.css';
import './assets/styles/main.less';//引入全局less
import "./_locales/i18n"//国际化
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { Provider } from 'react-redux';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();