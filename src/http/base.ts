/*
 * @LastEditors: night
 * @Author: night
 */
let isPro = process.env.NODE_ENV === "development" ? false : true
const baseURLs = {
    newBase: "/v3/api",
    analysisUrl: '/v3/api/review-analysis',
    relationUrl: '/v3/api/relation'
}
export default baseURLs