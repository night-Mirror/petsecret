/*
 * @LastEditors: night
 * @Author: night
 */
const modulesFiles = require.context('./lang', true, /\.json$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const value = modulesFiles(modulePath)
  Object.assign(modules,value);
  return modules
}, {})
export default modules