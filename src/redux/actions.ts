/*
 * @Description: 自动导入所有模块下的actions并导出
 * @LastEditors: night
 * @Author: night
 */
const modulesFiles = require.context('./modules', false, /\.ts$/)
let actions: Actions = {}
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

