"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "firebase-admin/app":
/*!*************************************!*\
  !*** external "firebase-admin/app" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("firebase-admin/app");

/***/ }),

/***/ "firebase-admin/auth":
/*!**************************************!*\
  !*** external "firebase-admin/auth" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("firebase-admin/auth");

/***/ }),

/***/ "firebase-admin/firestore":
/*!*******************************************!*\
  !*** external "firebase-admin/firestore" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("firebase-admin/firestore");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fvaibhavprakashchhajed%2Fblueprxnt.com%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fvaibhavprakashchhajed%2Fblueprxnt.com&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fvaibhavprakashchhajed%2Fblueprxnt.com%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fvaibhavprakashchhajed%2Fblueprxnt.com&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_vaibhavprakashchhajed_blueprxnt_com_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/Users/vaibhavprakashchhajed/blueprxnt.com/app/api/auth/[...nextauth]/route.ts\",\n    nextConfigOutput,\n    userland: _Users_vaibhavprakashchhajed_blueprxnt_com_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnZhaWJoYXZwcmFrYXNoY2hoYWplZCUyRmJsdWVwcnhudC5jb20lMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGdmFpYmhhdnByYWthc2hjaGhhamVkJTJGYmx1ZXByeG50LmNvbSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUM4QjtBQUMzRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzZKOztBQUU3SiIsInNvdXJjZXMiOlsid2VicGFjazovL2JsdWVwcnhudC8/MTg0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvdmFpYmhhdnByYWthc2hjaGhhamVkL2JsdWVwcnhudC5jb20vYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL3ZhaWJoYXZwcmFrYXNoY2hoYWplZC9ibHVlcHJ4bnQuY29tL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fvaibhavprakashchhajed%2Fblueprxnt.com%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fvaibhavprakashchhajed%2Fblueprxnt.com&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth/index.ts\");\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_lib_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpQztBQUNRO0FBRXpDLE1BQU1FLFVBQVVGLGdEQUFRQSxDQUFDQyxrREFBV0E7QUFFTyIsInNvdXJjZXMiOlsid2VicGFjazovL2JsdWVwcnhudC8uL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzP2M4YTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCc7XG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gJ0AvbGliL2F1dGgnO1xuXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xuXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH07XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJhdXRoT3B0aW9ucyIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth/index.ts":
/*!***************************!*\
  !*** ./lib/auth/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _lib_firebase_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/firebase-admin */ \"(rsc)/./lib/firebase-admin.ts\");\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                const email = credentials?.email?.trim().toLowerCase();\n                const password = credentials?.password?.trim();\n                if (!email || !password) return null;\n                try {\n                    // Verify credentials against Firebase Auth\n                    // Firebase Admin SDK doesn't have a direct password verify method,\n                    // so we use the Firebase Auth REST API\n                    const apiKey = process.env.FIREBASE_API_KEY;\n                    const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {\n                        method: \"POST\",\n                        headers: {\n                            \"Content-Type\": \"application/json\"\n                        },\n                        body: JSON.stringify({\n                            email,\n                            password,\n                            returnSecureToken: true\n                        })\n                    });\n                    const data = await res.json();\n                    if (!res.ok) {\n                        console.log(\"Firebase auth failed:\", data.error?.message);\n                        return null;\n                    }\n                    // Get user details from Firebase Admin\n                    if (!_lib_firebase_admin__WEBPACK_IMPORTED_MODULE_1__.adminAuth) {\n                        console.error(\"Firebase Admin Auth is not initialized\");\n                        return null;\n                    }\n                    const firebaseUser = await _lib_firebase_admin__WEBPACK_IMPORTED_MODULE_1__.adminAuth.getUserByEmail(email);\n                    // Check if user has admin custom claim\n                    const customClaims = firebaseUser.customClaims || {};\n                    if (!customClaims.admin) {\n                        console.log(\"User is not an admin:\", email);\n                        return null;\n                    }\n                    return {\n                        id: firebaseUser.uid,\n                        email: firebaseUser.email || email,\n                        name: firebaseUser.displayName || \"Admin\",\n                        role: \"admin\"\n                    };\n                } catch (error) {\n                    console.error(\"Auth error:\", error);\n                    return null;\n                }\n            }\n        })\n    ],\n    secret: process.env.NEXTAUTH_SECRET,\n    session: {\n        strategy: \"jwt\"\n    },\n    pages: {\n        signIn: \"/admin/login\"\n    },\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.role = user.role;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (session.user) {\n                session.user.role = token.role;\n            }\n            return session;\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC9pbmRleC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDa0U7QUFDakI7QUFFMUMsTUFBTUUsY0FBK0I7SUFDMUNDLFdBQVc7UUFDVEgsMkVBQW1CQSxDQUFDO1lBQ2xCSSxNQUFNO1lBQ05DLGFBQWE7Z0JBQ1hDLE9BQU87b0JBQUVDLE9BQU87b0JBQVNDLE1BQU07Z0JBQVE7Z0JBQ3ZDQyxVQUFVO29CQUFFRixPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ2xEO1lBQ0EsTUFBTUUsV0FBVUwsV0FBVztnQkFDekIsTUFBTUMsUUFBUUQsYUFBYUMsT0FBT0ssT0FBT0M7Z0JBQ3pDLE1BQU1ILFdBQVdKLGFBQWFJLFVBQVVFO2dCQUV4QyxJQUFJLENBQUNMLFNBQVMsQ0FBQ0csVUFBVSxPQUFPO2dCQUVoQyxJQUFJO29CQUNGLDJDQUEyQztvQkFDM0MsbUVBQW1FO29CQUNuRSx1Q0FBdUM7b0JBQ3ZDLE1BQU1JLFNBQVNDLFFBQVFDLEdBQUcsQ0FBQ0MsZ0JBQWdCO29CQUMzQyxNQUFNQyxNQUFNLE1BQU1DLE1BQ2hCLENBQUMsMEVBQTBFLEVBQUVMLE9BQU8sQ0FBQyxFQUNyRjt3QkFDRU0sUUFBUTt3QkFDUkMsU0FBUzs0QkFBRSxnQkFBZ0I7d0JBQW1CO3dCQUM5Q0MsTUFBTUMsS0FBS0MsU0FBUyxDQUFDOzRCQUNuQmpCOzRCQUNBRzs0QkFDQWUsbUJBQW1CO3dCQUNyQjtvQkFDRjtvQkFHRixNQUFNQyxPQUFPLE1BQU1SLElBQUlTLElBQUk7b0JBRTNCLElBQUksQ0FBQ1QsSUFBSVUsRUFBRSxFQUFFO3dCQUNYQyxRQUFRQyxHQUFHLENBQUMseUJBQXlCSixLQUFLSyxLQUFLLEVBQUVDO3dCQUNqRCxPQUFPO29CQUNUO29CQUVBLHVDQUF1QztvQkFDdkMsSUFBSSxDQUFDOUIsMERBQVNBLEVBQUU7d0JBQ2QyQixRQUFRRSxLQUFLLENBQUM7d0JBQ2QsT0FBTztvQkFDVDtvQkFFQSxNQUFNRSxlQUFlLE1BQU0vQiwwREFBU0EsQ0FBQ2dDLGNBQWMsQ0FBQzNCO29CQUVwRCx1Q0FBdUM7b0JBQ3ZDLE1BQU00QixlQUFlRixhQUFhRSxZQUFZLElBQUksQ0FBQztvQkFDbkQsSUFBSSxDQUFDQSxhQUFhQyxLQUFLLEVBQUU7d0JBQ3ZCUCxRQUFRQyxHQUFHLENBQUMseUJBQXlCdkI7d0JBQ3JDLE9BQU87b0JBQ1Q7b0JBRUEsT0FBTzt3QkFDTDhCLElBQUlKLGFBQWFLLEdBQUc7d0JBQ3BCL0IsT0FBTzBCLGFBQWExQixLQUFLLElBQUlBO3dCQUM3QkYsTUFBTTRCLGFBQWFNLFdBQVcsSUFBSTt3QkFDbENDLE1BQU07b0JBQ1I7Z0JBQ0YsRUFBRSxPQUFPVCxPQUFPO29CQUNkRixRQUFRRSxLQUFLLENBQUMsZUFBZUE7b0JBQzdCLE9BQU87Z0JBQ1Q7WUFDRjtRQUNGO0tBQ0Q7SUFDRFUsUUFBUTFCLFFBQVFDLEdBQUcsQ0FBQzBCLGVBQWU7SUFDbkNDLFNBQVM7UUFDUEMsVUFBVTtJQUNaO0lBQ0FDLE9BQU87UUFDTEMsUUFBUTtJQUNWO0lBQ0FDLFdBQVc7UUFDVCxNQUFNQyxLQUFJLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFO1lBQ3ZCLElBQUlBLE1BQU07Z0JBQ1JELE1BQU1ULElBQUksR0FBR1UsS0FBS1YsSUFBSTtZQUN4QjtZQUNBLE9BQU9TO1FBQ1Q7UUFDQSxNQUFNTixTQUFRLEVBQUVBLE9BQU8sRUFBRU0sS0FBSyxFQUFFO1lBQzlCLElBQUlOLFFBQVFPLElBQUksRUFBRTtnQkFDaEJQLFFBQVFPLElBQUksQ0FBQ1YsSUFBSSxHQUFHUyxNQUFNVCxJQUFJO1lBQ2hDO1lBQ0EsT0FBT0c7UUFDVDtJQUNGO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2JsdWVwcnhudC8uL2xpYi9hdXRoL2luZGV4LnRzPzU2OGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSAnbmV4dC1hdXRoJztcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHMnO1xuaW1wb3J0IHsgYWRtaW5BdXRoIH0gZnJvbSAnQC9saWIvZmlyZWJhc2UtYWRtaW4nO1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyA9IHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICBuYW1lOiAnQ3JlZGVudGlhbHMnLFxuICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgZW1haWw6IHsgbGFiZWw6ICdFbWFpbCcsIHR5cGU6ICdlbWFpbCcgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6ICdQYXNzd29yZCcsIHR5cGU6ICdwYXNzd29yZCcgfSxcbiAgICAgIH0sXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgY29uc3QgZW1haWwgPSBjcmVkZW50aWFscz8uZW1haWw/LnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBwYXNzd29yZCA9IGNyZWRlbnRpYWxzPy5wYXNzd29yZD8udHJpbSgpO1xuXG4gICAgICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkKSByZXR1cm4gbnVsbDtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFZlcmlmeSBjcmVkZW50aWFscyBhZ2FpbnN0IEZpcmViYXNlIEF1dGhcbiAgICAgICAgICAvLyBGaXJlYmFzZSBBZG1pbiBTREsgZG9lc24ndCBoYXZlIGEgZGlyZWN0IHBhc3N3b3JkIHZlcmlmeSBtZXRob2QsXG4gICAgICAgICAgLy8gc28gd2UgdXNlIHRoZSBGaXJlYmFzZSBBdXRoIFJFU1QgQVBJXG4gICAgICAgICAgY29uc3QgYXBpS2V5ID0gcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVBJX0tFWTtcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICAgIGBodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS92MS9hY2NvdW50czpzaWduSW5XaXRoUGFzc3dvcmQ/a2V5PSR7YXBpS2V5fWAsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICAgICAgICAgIHJldHVyblNlY3VyZVRva2VuOiB0cnVlLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZpcmViYXNlIGF1dGggZmFpbGVkOicsIGRhdGEuZXJyb3I/Lm1lc3NhZ2UpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gR2V0IHVzZXIgZGV0YWlscyBmcm9tIEZpcmViYXNlIEFkbWluXG4gICAgICAgICAgaWYgKCFhZG1pbkF1dGgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZpcmViYXNlIEFkbWluIEF1dGggaXMgbm90IGluaXRpYWxpemVkJyk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBmaXJlYmFzZVVzZXIgPSBhd2FpdCBhZG1pbkF1dGguZ2V0VXNlckJ5RW1haWwoZW1haWwpO1xuXG4gICAgICAgICAgLy8gQ2hlY2sgaWYgdXNlciBoYXMgYWRtaW4gY3VzdG9tIGNsYWltXG4gICAgICAgICAgY29uc3QgY3VzdG9tQ2xhaW1zID0gZmlyZWJhc2VVc2VyLmN1c3RvbUNsYWltcyB8fCB7fTtcbiAgICAgICAgICBpZiAoIWN1c3RvbUNsYWltcy5hZG1pbikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1VzZXIgaXMgbm90IGFuIGFkbWluOicsIGVtYWlsKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogZmlyZWJhc2VVc2VyLnVpZCxcbiAgICAgICAgICAgIGVtYWlsOiBmaXJlYmFzZVVzZXIuZW1haWwgfHwgZW1haWwsXG4gICAgICAgICAgICBuYW1lOiBmaXJlYmFzZVVzZXIuZGlzcGxheU5hbWUgfHwgJ0FkbWluJyxcbiAgICAgICAgICAgIHJvbGU6ICdhZG1pbicsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdBdXRoIGVycm9yOicsIGVycm9yKTtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXG4gIHNlc3Npb246IHtcbiAgICBzdHJhdGVneTogJ2p3dCcsXG4gIH0sXG4gIHBhZ2VzOiB7XG4gICAgc2lnbkluOiAnL2FkbWluL2xvZ2luJyxcbiAgfSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgdG9rZW4ucm9sZSA9IHVzZXIucm9sZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LFxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XG4gICAgICBpZiAoc2Vzc2lvbi51c2VyKSB7XG4gICAgICAgIHNlc3Npb24udXNlci5yb2xlID0gdG9rZW4ucm9sZSBhcyBzdHJpbmc7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICB9LFxuICB9LFxufTtcbiJdLCJuYW1lcyI6WyJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiYWRtaW5BdXRoIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwidHJpbSIsInRvTG93ZXJDYXNlIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIkZJUkVCQVNFX0FQSV9LRVkiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJldHVyblNlY3VyZVRva2VuIiwiZGF0YSIsImpzb24iLCJvayIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIm1lc3NhZ2UiLCJmaXJlYmFzZVVzZXIiLCJnZXRVc2VyQnlFbWFpbCIsImN1c3RvbUNsYWltcyIsImFkbWluIiwiaWQiLCJ1aWQiLCJkaXNwbGF5TmFtZSIsInJvbGUiLCJzZWNyZXQiLCJORVhUQVVUSF9TRUNSRVQiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJwYWdlcyIsInNpZ25JbiIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwidXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth/index.ts\n");

/***/ }),

/***/ "(rsc)/./lib/firebase-admin.ts":
/*!*******************************!*\
  !*** ./lib/firebase-admin.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   adminAuth: () => (/* binding */ adminAuth),\n/* harmony export */   adminDb: () => (/* binding */ adminDb)\n/* harmony export */ });\n/* harmony import */ var firebase_admin_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase-admin/app */ \"firebase-admin/app\");\n/* harmony import */ var firebase_admin_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_admin_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_admin_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase-admin/auth */ \"firebase-admin/auth\");\n/* harmony import */ var firebase_admin_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_admin_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_admin_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase-admin/firestore */ \"firebase-admin/firestore\");\n/* harmony import */ var firebase_admin_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_admin_firestore__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n// Check if all required environment variables are present\nconst hasFirebaseConfig = process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_CLIENT_EMAIL && process.env.FIREBASE_PRIVATE_KEY;\nlet app;\nif (hasFirebaseConfig) {\n    const firebaseAdminConfig = {\n        credential: (0,firebase_admin_app__WEBPACK_IMPORTED_MODULE_0__.cert)({\n            projectId: process.env.FIREBASE_PROJECT_ID,\n            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,\n            privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\\\n/g, \"\\n\")\n        })\n    };\n    app = (0,firebase_admin_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length === 0 ? (0,firebase_admin_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseAdminConfig) : (0,firebase_admin_app__WEBPACK_IMPORTED_MODULE_0__.getApps)()[0];\n}\nconst adminAuth = app ? (0,firebase_admin_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app) : undefined;\nconst adminDb = app ? (0,firebase_admin_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app) : undefined;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZmlyZWJhc2UtYWRtaW4udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBdUU7QUFDbkI7QUFDZTtBQUVuRSwwREFBMEQ7QUFDMUQsTUFBTUssb0JBQ0pDLFFBQVFDLEdBQUcsQ0FBQ0MsbUJBQW1CLElBQy9CRixRQUFRQyxHQUFHLENBQUNFLHFCQUFxQixJQUNqQ0gsUUFBUUMsR0FBRyxDQUFDRyxvQkFBb0I7QUFFbEMsSUFBSUM7QUFFSixJQUFJTixtQkFBbUI7SUFDckIsTUFBTU8sc0JBQXNCO1FBQzFCQyxZQUFZWCx3REFBSUEsQ0FBQztZQUNmWSxXQUFXUixRQUFRQyxHQUFHLENBQUNDLG1CQUFtQjtZQUMxQ08sYUFBYVQsUUFBUUMsR0FBRyxDQUFDRSxxQkFBcUI7WUFDOUNPLFlBQVlWLFFBQVFDLEdBQUcsQ0FBQ0csb0JBQW9CLENBQUVPLE9BQU8sQ0FBQyxRQUFRO1FBQ2hFO0lBQ0Y7SUFFQU4sTUFBTVYsMkRBQU9BLEdBQUdpQixNQUFNLEtBQUssSUFBSWxCLGlFQUFhQSxDQUFDWSx1QkFBdUJYLDJEQUFPQSxFQUFFLENBQUMsRUFBRTtBQUNsRjtBQUVPLE1BQU1rQixZQUE4QlIsTUFBTVIsNERBQU9BLENBQUNRLE9BQU9TLFVBQVU7QUFDbkUsTUFBTUMsVUFBaUNWLE1BQU1QLHNFQUFZQSxDQUFDTyxPQUFPUyxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmx1ZXByeG50Ly4vbGliL2ZpcmViYXNlLWFkbWluLnRzPzZhNDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCwgZ2V0QXBwcywgY2VydCwgQXBwIH0gZnJvbSAnZmlyZWJhc2UtYWRtaW4vYXBwJztcbmltcG9ydCB7IGdldEF1dGgsIEF1dGggfSBmcm9tICdmaXJlYmFzZS1hZG1pbi9hdXRoJztcbmltcG9ydCB7IGdldEZpcmVzdG9yZSwgRmlyZXN0b3JlIH0gZnJvbSAnZmlyZWJhc2UtYWRtaW4vZmlyZXN0b3JlJztcblxuLy8gQ2hlY2sgaWYgYWxsIHJlcXVpcmVkIGVudmlyb25tZW50IHZhcmlhYmxlcyBhcmUgcHJlc2VudFxuY29uc3QgaGFzRmlyZWJhc2VDb25maWcgPVxuICBwcm9jZXNzLmVudi5GSVJFQkFTRV9QUk9KRUNUX0lEICYmXG4gIHByb2Nlc3MuZW52LkZJUkVCQVNFX0NMSUVOVF9FTUFJTCAmJlxuICBwcm9jZXNzLmVudi5GSVJFQkFTRV9QUklWQVRFX0tFWTtcblxubGV0IGFwcDogQXBwIHwgdW5kZWZpbmVkO1xuXG5pZiAoaGFzRmlyZWJhc2VDb25maWcpIHtcbiAgY29uc3QgZmlyZWJhc2VBZG1pbkNvbmZpZyA9IHtcbiAgICBjcmVkZW50aWFsOiBjZXJ0KHtcbiAgICAgIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfUFJPSkVDVF9JRCEsXG4gICAgICBjbGllbnRFbWFpbDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQ0xJRU5UX0VNQUlMISxcbiAgICAgIHByaXZhdGVLZXk6IHByb2Nlc3MuZW52LkZJUkVCQVNFX1BSSVZBVEVfS0VZIS5yZXBsYWNlKC9cXFxcbi9nLCAnXFxuJyksXG4gICAgfSksXG4gIH07XG5cbiAgYXBwID0gZ2V0QXBwcygpLmxlbmd0aCA9PT0gMCA/IGluaXRpYWxpemVBcHAoZmlyZWJhc2VBZG1pbkNvbmZpZykgOiBnZXRBcHBzKClbMF07XG59XG5cbmV4cG9ydCBjb25zdCBhZG1pbkF1dGg6IEF1dGggfCB1bmRlZmluZWQgPSBhcHAgPyBnZXRBdXRoKGFwcCkgOiB1bmRlZmluZWQ7XG5leHBvcnQgY29uc3QgYWRtaW5EYjogRmlyZXN0b3JlIHwgdW5kZWZpbmVkID0gYXBwID8gZ2V0RmlyZXN0b3JlKGFwcCkgOiB1bmRlZmluZWQ7XG4iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEFwcHMiLCJjZXJ0IiwiZ2V0QXV0aCIsImdldEZpcmVzdG9yZSIsImhhc0ZpcmViYXNlQ29uZmlnIiwicHJvY2VzcyIsImVudiIsIkZJUkVCQVNFX1BST0pFQ1RfSUQiLCJGSVJFQkFTRV9DTElFTlRfRU1BSUwiLCJGSVJFQkFTRV9QUklWQVRFX0tFWSIsImFwcCIsImZpcmViYXNlQWRtaW5Db25maWciLCJjcmVkZW50aWFsIiwicHJvamVjdElkIiwiY2xpZW50RW1haWwiLCJwcml2YXRlS2V5IiwicmVwbGFjZSIsImxlbmd0aCIsImFkbWluQXV0aCIsInVuZGVmaW5lZCIsImFkbWluRGIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/firebase-admin.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jose","vendor-chunks/next-auth","vendor-chunks/openid-client","vendor-chunks/@babel","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/preact","vendor-chunks/oidc-token-hash","vendor-chunks/lru-cache","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fvaibhavprakashchhajed%2Fblueprxnt.com%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fvaibhavprakashchhajed%2Fblueprxnt.com&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();