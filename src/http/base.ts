/*
 * @LastEditors: night
 * @Author: night
 */
let isPro = process.env.NODE_ENV === "production" ? "" : "/mock"
const baseURLs = {
    base: isPro + "/",
    articleUrl: isPro + '/article',

}
export default baseURLs