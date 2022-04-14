/*
 * @LastEditors: night
 * @Author: night
 */
let isPro = process.env.NODE_ENV === "production" ? "" : "/dev"
const baseURLs = {
    newBase: isPro + "/v3/api",
    analysisUrl: isPro + '/v3/api/review-analysis',
    relationUrl: isPro + '/v3/api/relation'
}
export default baseURLs