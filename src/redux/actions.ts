/*
 * @LastEditors: night
 * @Author: night
 */
const modulesFiles = require.context('./modules', false, /\.ts$/)
// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
interface actions {
    [propName: string]: any
}
let actions: actions = {}
modulesFiles.keys().map(modulePath => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    if (!moduleName.startsWith("redux")) {
        const value = modulesFiles(modulePath)
        let actionsType = value.action
        actions = { ...actions, ...actionsType }
    }
    return false
})
export default actions

