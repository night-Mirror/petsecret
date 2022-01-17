/*
 * @LastEditors: night
 * @Author: night
 */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import App from "./reducers"
export default createStore(App, {}, applyMiddleware(thunk))