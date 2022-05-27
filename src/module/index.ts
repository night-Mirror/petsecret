/*
 * @Description: 
 * @LastEditors: night
 * @Author: night
 */
const modulesFiles = require.context('./modules', true, /\.tsx$/)
let portalModules = {}
modulesFiles.keys().map(modulePath => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    if (!moduleName.startsWith("redux")) {
        const value = modulesFiles(modulePath)
        let Modules = value.default
        portalModules = { ...portalModules, Modules }
    }
    return false

})
export default portalModules