/*
 * @Description: 
 * @LastEditors: night
 * @Author: night
 */
const modulesFiles = require.context('./modules', true, /\.tsx$/)
let portalModules = {}
modulesFiles.keys().map(modulePath => {
    const value = modulesFiles(modulePath)
    let Modules = value.default
    portalModules = { ...portalModules, Modules }
})
export default portalModules