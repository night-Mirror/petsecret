/*
 * @LastEditors: night
 * @Author: night
 */
import React from 'react';
import ReactDOM from 'react-dom';
import 'nprogress/nprogress.css'
import "./assets/svg-icon/index";//引入svg
import './index.css';
import './assets/styles/main.less';//引入全局less
import 'rc-texty/assets/index.css';
import 'driver.js/dist/driver.min.css';//页面引导css
import "./_locales/i18n"//国际化
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import mock from "./mock/mock"
if (process.env.NODE_ENV !== 'production') {
  const { mockXHR } = mock
  mockXHR()
}
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
  () => {

  }
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
