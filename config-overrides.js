/*
 * @LastEditors: night
 * @Author: night
 */
const { override, fixBabelImports, addWebpackAlias, addLessLoader } = require('customize-cra')
const path = require('path')
module.exports = override(
    // fixBabelImports('import', {
    //     libraryName: 'antd',
    //     libraryDirectory: 'es',
    //     style: 'true' //或者true, true代表运用less
    // }),
    addWebpackAlias({
        ["@"]: path.resolve(__dirname, "src"),
        ["@c"]: path.resolve(__dirname, "src/components"),
    }),
    addLessLoader(),

)