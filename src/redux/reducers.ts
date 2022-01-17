/*
 * @LastEditors: night
 * @Author: night
 */
import { combineReducers } from 'redux'

const modulesFiles = require.context('./modules', false, /\.ts$/)
// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules: { [props: string]: any }, modulePath: string) => {
    // set './app.js' => 'app'
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    if (!moduleName.startsWith("redux")) {
        const value = modulesFiles(modulePath)
        modules[moduleName] = value.default
    }
    return modules
}, {})
export default combineReducers(modules)