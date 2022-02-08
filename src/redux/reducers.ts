/*
 * @LastEditors: night
 * @Author: night
 */
import { combineReducers } from 'redux'
const modulesFiles = require.context('./modules', false, /\.ts$/)
const modules = modulesFiles.keys().reduce((modules: { [props: string]: any }, modulePath: string) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    if (!moduleName.startsWith("redux")) {
        const value = modulesFiles(modulePath)
        modules[moduleName] = value.default
    }
    return modules
}, {})
export default combineReducers(modules)