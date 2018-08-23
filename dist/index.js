require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api/hanzi.ts":
/*!**************************!*\
  !*** ./src/api/hanzi.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__filename) {/* harmony import */ var _server_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../server/server */ \"./src/server/server.ts\");\n/* harmony import */ var _server_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../server/validate */ \"./src/server/validate.ts\");\n/* harmony import */ var hanzi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hanzi */ \"hanzi\");\n/* harmony import */ var hanzi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hanzi__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var pinyin_tone_convert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pinyin-tone-convert */ \"pinyin-tone-convert\");\n/* harmony import */ var pinyin_tone_convert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pinyin_tone_convert__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\nhanzi__WEBPACK_IMPORTED_MODULE_2___default.a.start();\r\nconst characterModel = Object(_server_validate__WEBPACK_IMPORTED_MODULE_1__[\"vmodel\"])({\r\n    character: {\r\n        type: value => {\r\n            if (typeof value !== 'string')\r\n                return 'must be a string';\r\n            if (value.length < 1)\r\n                return 'must be greater than 1 chars';\r\n            if (value.length > 100)\r\n                return 'must be less than 100 chars';\r\n            return true;\r\n        },\r\n        default: 'a',\r\n    },\r\n});\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (_server_server__WEBPACK_IMPORTED_MODULE_0__[\"default\"].newController('/' + _server_server__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFileName(__filename), router => {\r\n    //configure router for incoming requests, see koa-router documentation\r\n    router.get('/characters/:character', Object(_server_validate__WEBPACK_IMPORTED_MODULE_1__[\"validate\"])(characterModel), async (ctx) => {\r\n        const decomposition = hanzi__WEBPACK_IMPORTED_MODULE_2___default.a.decomposeMany(ctx.params.character, 2);\r\n        for (const char in decomposition) {\r\n            const data = decomposition[char];\r\n            data.components = data.components.map(component => {\r\n                const pinyin = hanzi__WEBPACK_IMPORTED_MODULE_2___default.a.getPinyin(component)[0] || '';\r\n                return {\r\n                    radical: component,\r\n                    pinyin,\r\n                    pinyin2: pinyin_tone_convert__WEBPACK_IMPORTED_MODULE_3___default()(pinyin),\r\n                    definitions: [hanzi__WEBPACK_IMPORTED_MODULE_2___default.a.getRadicalMeaning(component)],\r\n                };\r\n            });\r\n            data.translations = hanzi__WEBPACK_IMPORTED_MODULE_2___default.a.definitionLookup(char, 's').map(definition => {\r\n                return {\r\n                    pinyin: definition.pinyin,\r\n                    pinyin2: pinyin_tone_convert__WEBPACK_IMPORTED_MODULE_3___default()(definition.pinyin),\r\n                    definitions: definition.definition.split('/'),\r\n                };\r\n            });\r\n            //data.position = hanzi.getCharacterFrequency(char).number\r\n            data.examples = hanzi__WEBPACK_IMPORTED_MODULE_2___default.a.getExamples(char)[0].map(example => {\r\n                return {\r\n                    example: example.simplified,\r\n                    pinyin: example.pinyin,\r\n                    pinyin2: pinyin_tone_convert__WEBPACK_IMPORTED_MODULE_3___default()(example.pinyin),\r\n                    definitions: example.definition.split('/'),\r\n                };\r\n            });\r\n        }\r\n        ctx.body = decomposition;\r\n    });\r\n}));\r\n\n/* WEBPACK VAR INJECTION */}.call(this, \"src\\\\api\\\\hanzi.ts\"))\n\n//# sourceURL=webpack:///./src/api/hanzi.ts?");

/***/ }),

/***/ "./src/api/index.ts":
/*!**************************!*\
  !*** ./src/api/index.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hanzi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hanzi */ \"./src/api/hanzi.ts\");\n\r\n//put all controllers in this array for loading\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Promise.all([_hanzi__WEBPACK_IMPORTED_MODULE_0__[\"default\"]]));\r\n\n\n//# sourceURL=webpack:///./src/api/index.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _server_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server/server */ \"./src/server/server.ts\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ \"./src/api/index.ts\");\n/* harmony import */ var _jobs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jobs */ \"./src/jobs/index.ts\");\n\r\n\r\n\r\n\r\n//read config\r\ndotenv__WEBPACK_IMPORTED_MODULE_1___default.a.config();\r\n//start server with configured port or default\r\nlet main;\r\n(async () => {\r\n    main = new _server_server__WEBPACK_IMPORTED_MODULE_0__[\"default\"](await _api__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _jobs__WEBPACK_IMPORTED_MODULE_3__[\"default\"], +process.env.PORT || undefined);\r\n})();\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/jobs/greetings.ts":
/*!*******************************!*\
  !*** ./src/jobs/greetings.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst job = {\r\n    name: 'greet',\r\n    func: async (greet) => {\r\n    },\r\n    parameters: ['hello'],\r\n    interval: 60000,\r\n    instantRun: true,\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (job);\r\n\n\n//# sourceURL=webpack:///./src/jobs/greetings.ts?");

/***/ }),

/***/ "./src/jobs/index.ts":
/*!***************************!*\
  !*** ./src/jobs/index.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _greetings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./greetings */ \"./src/jobs/greetings.ts\");\n/* harmony import */ var _lunch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lunch */ \"./src/jobs/lunch.ts\");\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ([_greetings__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _lunch__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]);\r\n\n\n//# sourceURL=webpack:///./src/jobs/index.ts?");

/***/ }),

/***/ "./src/jobs/lunch.ts":
/*!***************************!*\
  !*** ./src/jobs/lunch.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst job = {\r\n    name: 'lunch',\r\n    func: greet => {\r\n        console.log(greet);\r\n    },\r\n    parameters: ['Time for lunch!'],\r\n    times: [\r\n        {\r\n            hour: 14,\r\n            minute: 35,\r\n        },\r\n        {\r\n            hour: 14,\r\n            minute: 36,\r\n        },\r\n    ],\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (job);\r\n\n\n//# sourceURL=webpack:///./src/jobs/lunch.ts?");

/***/ }),

/***/ "./src/server/job-manager.ts":
/*!***********************************!*\
  !*** ./src/server/job-manager.ts ***!
  \***********************************/
/*! exports provided: JobManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"JobManager\", function() { return JobManager; });\nconst INTERVAL_MS = 1000;\r\nclass JobManager {\r\n    constructor() {\r\n        this.jobList = [];\r\n        this.globalInterval = setInterval(() => {\r\n            const now = new Date();\r\n            const minutes = now.getHours() * 60 + now.getMinutes();\r\n            const timedJobs = this.jobList.filter(j => j.times &&\r\n                j.times.some(jt => jt.hour * 60 + jt.minute === minutes && now.getTime() - j.lastRun > 60 * INTERVAL_MS));\r\n            timedJobs.forEach(j => this.runJob(j.name));\r\n        }, INTERVAL_MS);\r\n    }\r\n    findJobByName(name) {\r\n        return this.jobList.findIndex(j => j.name === name);\r\n    }\r\n    get jobs() {\r\n        return this.jobList;\r\n    }\r\n    addJobs(jobs) {\r\n        jobs.forEach(j => this.addJob(j));\r\n    }\r\n    addJob(job) {\r\n        const jobIndex = this.findJobByName(job.name);\r\n        if (jobIndex >= 0) {\r\n            this.jobList[jobIndex] = job;\r\n        }\r\n        else {\r\n            this.jobList.push(job);\r\n        }\r\n        if (job.intervalRef) {\r\n            clearInterval(job.intervalRef);\r\n        }\r\n        if (job.interval) {\r\n            job.intervalRef = setInterval(() => {\r\n                job.func(...job.parameters);\r\n                job.lastRun = Date.now();\r\n            }, job.interval);\r\n        }\r\n        job.lastRun = 1;\r\n        if (job.instantRun) {\r\n            job.func(...job.parameters);\r\n            job.lastRun = Date.now();\r\n        }\r\n    }\r\n    removeJob(name) {\r\n        const jobIndex = this.findJobByName(name);\r\n        if (jobIndex >= 0) {\r\n            this.jobList.splice(jobIndex, 1);\r\n        }\r\n    }\r\n    runJob(name) {\r\n        const jobIndex = this.findJobByName(name);\r\n        if (jobIndex >= 0) {\r\n            const job = this.jobList[jobIndex];\r\n            job.func(...job.parameters);\r\n            job.lastRun = Date.now();\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/server/job-manager.ts?");

/***/ }),

/***/ "./src/server/middlewares.ts":
/*!***********************************!*\
  !*** ./src/server/middlewares.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _koa_cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @koa/cors */ \"@koa/cors\");\n/* harmony import */ var _koa_cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_koa_cors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-bodyparser */ \"koa-bodyparser\");\n/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_bodyparser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var koa_compress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa-compress */ \"koa-compress\");\n/* harmony import */ var koa_compress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa_compress__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var koa_conditional_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! koa-conditional-get */ \"koa-conditional-get\");\n/* harmony import */ var koa_conditional_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(koa_conditional_get__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var koa_etag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! koa-etag */ \"koa-etag\");\n/* harmony import */ var koa_etag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(koa_etag__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var koa_json_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! koa-json-mask */ \"koa-json-mask\");\n/* harmony import */ var koa_json_mask__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(koa_json_mask__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var koa_morgan__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! koa-morgan */ \"koa-morgan\");\n/* harmony import */ var koa_morgan__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(koa_morgan__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! koa-static */ \"koa-static\");\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _paths__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./paths */ \"./src/server/paths.ts\");\n/* harmony import */ var koa_rest_cache__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! koa-rest-cache */ \"koa-rest-cache\");\n/* harmony import */ var koa_rest_cache__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(koa_rest_cache__WEBPACK_IMPORTED_MODULE_9__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//configure all middlewares here\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\r\n    //helmet(),\r\n    _koa_cors__WEBPACK_IMPORTED_MODULE_0___default()(),\r\n    koa_morgan__WEBPACK_IMPORTED_MODULE_6___default()('combined'),\r\n    koa_compress__WEBPACK_IMPORTED_MODULE_2___default()({ threshold: 256 }),\r\n    koa_conditional_get__WEBPACK_IMPORTED_MODULE_3___default()(),\r\n    koa_etag__WEBPACK_IMPORTED_MODULE_4___default()(),\r\n    koa_rest_cache__WEBPACK_IMPORTED_MODULE_9___default()(),\r\n    koa_json_mask__WEBPACK_IMPORTED_MODULE_5___default()(),\r\n    koa_bodyparser__WEBPACK_IMPORTED_MODULE_1___default()(),\r\n    koa_static__WEBPACK_IMPORTED_MODULE_7___default()(_paths__WEBPACK_IMPORTED_MODULE_8__[\"default\"].public),\r\n]);\r\n\n\n//# sourceURL=webpack:///./src/server/middlewares.ts?");

/***/ }),

/***/ "./src/server/paths.ts":
/*!*****************************!*\
  !*** ./src/server/paths.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    public: path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(__dirname + '../../../public'),\r\n    store: path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(__dirname + '../../../store'),\r\n    profiles: path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(__dirname + '../../../profiles'),\r\n});\r\n\n/* WEBPACK VAR INJECTION */}.call(this, \"src\\\\server\"))\n\n//# sourceURL=webpack:///./src/server/paths.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Server; });\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ \"koa\");\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var koa_mount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-mount */ \"koa-mount\");\n/* harmony import */ var koa_mount__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_mount__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa-router */ \"koa-router\");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var pino__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pino */ \"pino\");\n/* harmony import */ var pino__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pino__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./middlewares */ \"./src/server/middlewares.ts\");\n/* harmony import */ var _job_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./job-manager */ \"./src/server/job-manager.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst globalLogger = pino__WEBPACK_IMPORTED_MODULE_4___default()();\r\nconst globalJobManager = new _job_manager__WEBPACK_IMPORTED_MODULE_6__[\"JobManager\"]();\r\n/**\r\n * Main orchestration class\r\n *\r\n * @export\r\n * @class Server\r\n */\r\nclass Server {\r\n    /**\r\n     *Creates an instance of Server.\r\n     * @param {Array<any>} mounts\r\n     * @param {number} [port=5001]\r\n     * @memberof Server\r\n     */\r\n    constructor(mounts, jobs, port = 5001) {\r\n        this._server = new koa__WEBPACK_IMPORTED_MODULE_0___default.a();\r\n        //load middlewares\r\n        _middlewares__WEBPACK_IMPORTED_MODULE_5__[\"default\"].concat(mounts.map(m => koa_mount__WEBPACK_IMPORTED_MODULE_1___default()(m.name, m.app))).forEach(m => this._server.use(m));\r\n        Server.jobManager.addJobs(jobs);\r\n        //start server\r\n        this._server.listen(port);\r\n        Server.logger.info(`Server running on port ${port}`);\r\n    }\r\n    /**\r\n     * Creates a new controller\r\n     *\r\n     * @static\r\n     * @param {string} name the path to the controller\r\n     * @param {(router: Router, db: low.LowdbAsync<any>) => void} routing the routing actions\r\n     * @param {string} [dbName='db'] the name of the database file\r\n     * @returns {Promise<IController>}\r\n     * @memberof Server\r\n     */\r\n    static async newController(name, routing, dbName = 'db') {\r\n        const app = new koa__WEBPACK_IMPORTED_MODULE_0___default.a();\r\n        const router = new koa_router__WEBPACK_IMPORTED_MODULE_2___default.a();\r\n        router.use(Server.mergeParams);\r\n        routing(router);\r\n        app.use(router.routes());\r\n        app.use(router.allowedMethods());\r\n        return new Promise(resolve => {\r\n            resolve({\r\n                name,\r\n                app,\r\n            });\r\n        });\r\n    }\r\n    /**\r\n     * Custom middleware: merges query and body parameters into path parameters object (params)\r\n     *\r\n     * @private\r\n     * @static\r\n     * @param {Router.IRouterContext} ctx\r\n     * @param {() => Promise<any>} next\r\n     * @memberof Server\r\n     */\r\n    static async mergeParams(ctx, next) {\r\n        if (typeof ctx.request.query === 'object') {\r\n            for (const key in ctx.request.query) {\r\n                ctx.params[key] = ctx.request.query[key];\r\n            }\r\n        }\r\n        if (typeof ctx.request.body === 'object') {\r\n            for (const key in ctx.request.body) {\r\n                ctx.params[key] = ctx.request.body[key];\r\n            }\r\n        }\r\n        await next();\r\n    }\r\n    /**\r\n     * Gets the name of a file from the file path without any extension\r\n     *\r\n     * @static\r\n     * @param {string} filePath\r\n     * @returns\r\n     * @memberof Server\r\n     */\r\n    static getFileName(filePath) {\r\n        return path__WEBPACK_IMPORTED_MODULE_3___default.a.basename(filePath).replace(path__WEBPACK_IMPORTED_MODULE_3___default.a.extname(filePath), '');\r\n    }\r\n    /**\r\n     * Returns a logger\r\n     *\r\n     * @readonly\r\n     * @static\r\n     * @type {pino.Logger}\r\n     * @memberof Server\r\n     */\r\n    static get logger() {\r\n        return globalLogger;\r\n    }\r\n    static get jobManager() {\r\n        return globalJobManager;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/server/server.ts?");

/***/ }),

/***/ "./src/server/validate.ts":
/*!********************************!*\
  !*** ./src/server/validate.ts ***!
  \********************************/
/*! exports provided: vmodel, validate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"vmodel\", function() { return vmodel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validate\", function() { return validate; });\n/* harmony import */ var valify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! valify */ \"valify\");\n/* harmony import */ var valify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(valify__WEBPACK_IMPORTED_MODULE_0__);\n\r\nconst defaultOptions = {\r\n    usePromise: true,\r\n    autoCast: true,\r\n    overwriteUndefined: true,\r\n};\r\nfunction vmodel(model) {\r\n    return new valify__WEBPACK_IMPORTED_MODULE_0___default.a(model, defaultOptions);\r\n}\r\nfunction validate(model) {\r\n    return async (ctx, next) => {\r\n        try {\r\n            await model(ctx.params);\r\n            await next();\r\n        }\r\n        catch (error) {\r\n            ctx.status = 422;\r\n            ctx.body = Object.assign({}, error.fields);\r\n            model.owner.errors = {\r\n                message: '',\r\n                fields: [],\r\n            };\r\n        }\r\n    };\r\n}\r\n\n\n//# sourceURL=webpack:///./src/server/validate.ts?");

/***/ }),

/***/ "@koa/cors":
/*!****************************!*\
  !*** external "@koa/cors" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@koa/cors\");\n\n//# sourceURL=webpack:///external_%22@koa/cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "hanzi":
/*!************************!*\
  !*** external "hanzi" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"hanzi\");\n\n//# sourceURL=webpack:///external_%22hanzi%22?");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa\");\n\n//# sourceURL=webpack:///external_%22koa%22?");

/***/ }),

/***/ "koa-bodyparser":
/*!*********************************!*\
  !*** external "koa-bodyparser" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-bodyparser\");\n\n//# sourceURL=webpack:///external_%22koa-bodyparser%22?");

/***/ }),

/***/ "koa-compress":
/*!*******************************!*\
  !*** external "koa-compress" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-compress\");\n\n//# sourceURL=webpack:///external_%22koa-compress%22?");

/***/ }),

/***/ "koa-conditional-get":
/*!**************************************!*\
  !*** external "koa-conditional-get" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-conditional-get\");\n\n//# sourceURL=webpack:///external_%22koa-conditional-get%22?");

/***/ }),

/***/ "koa-etag":
/*!***************************!*\
  !*** external "koa-etag" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-etag\");\n\n//# sourceURL=webpack:///external_%22koa-etag%22?");

/***/ }),

/***/ "koa-json-mask":
/*!********************************!*\
  !*** external "koa-json-mask" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-json-mask\");\n\n//# sourceURL=webpack:///external_%22koa-json-mask%22?");

/***/ }),

/***/ "koa-morgan":
/*!*****************************!*\
  !*** external "koa-morgan" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-morgan\");\n\n//# sourceURL=webpack:///external_%22koa-morgan%22?");

/***/ }),

/***/ "koa-mount":
/*!****************************!*\
  !*** external "koa-mount" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-mount\");\n\n//# sourceURL=webpack:///external_%22koa-mount%22?");

/***/ }),

/***/ "koa-rest-cache":
/*!*********************************!*\
  !*** external "koa-rest-cache" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-rest-cache\");\n\n//# sourceURL=webpack:///external_%22koa-rest-cache%22?");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-router\");\n\n//# sourceURL=webpack:///external_%22koa-router%22?");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-static\");\n\n//# sourceURL=webpack:///external_%22koa-static%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "pino":
/*!***********************!*\
  !*** external "pino" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"pino\");\n\n//# sourceURL=webpack:///external_%22pino%22?");

/***/ }),

/***/ "pinyin-tone-convert":
/*!**************************************!*\
  !*** external "pinyin-tone-convert" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"pinyin-tone-convert\");\n\n//# sourceURL=webpack:///external_%22pinyin-tone-convert%22?");

/***/ }),

/***/ "valify":
/*!*************************!*\
  !*** external "valify" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"valify\");\n\n//# sourceURL=webpack:///external_%22valify%22?");

/***/ })

/******/ });