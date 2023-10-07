"use strict";
(() => {
var exports = {};
exports.id = 7155;
exports.ids = [7155];
exports.modules = {

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 23712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./src/app/favicon.ico?__next_metadata_route__
var favicon_next_metadata_route_namespaceObject = {};
__webpack_require__.r(favicon_next_metadata_route_namespaceObject);
__webpack_require__.d(favicon_next_metadata_route_namespaceObject, {
  GET: () => (GET),
  dynamic: () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(36519);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(53488);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
;// CONCATENATED MODULE: external "next/server"
const server_namespaceObject = require("next/server");
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./src/app/favicon.ico?__next_metadata_route__


const contentType = "image/x-icon"
const buffer = Buffer.from("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", 'base64'
  )

function GET() {
  return new server_namespaceObject.NextResponse(buffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, max-age=0, must-revalidate",
    },
  })
}

const dynamic = 'force-static'

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Ffavicon.ico%2Froute&name=app%2Ffavicon.ico%2Froute&pagePath=private-next-app-dir%2Ffavicon.ico&appDir=%2FUsers%2Fandialifikhlasulamal%2FDocuments%2Fproject%2Fsipakamaseta%2Fsrc%2Fapp&appPaths=%2Ffavicon.ico&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/favicon.ico/route","pathname":"/favicon.ico","filename":"favicon","bundlePath":"app/favicon.ico/route"},"resolvedPagePath":"next-metadata-route-loader?page=%2Ffavicon.ico%2Froute&isDynamic=0!/Users/andialifikhlasulamal/Documents/project/sipakamaseta/src/app/favicon.ico?__next_metadata_route__","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: favicon_next_metadata_route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/favicon.ico/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1697,1925,8451], () => (__webpack_exec__(23712)));
module.exports = __webpack_exports__;

})();