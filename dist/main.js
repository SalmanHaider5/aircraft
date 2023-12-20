/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config/config.js":
/*!******************************!*\
  !*** ./src/config/config.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst config = {\r\n    mongoose: {\r\n        url: `${process.env.MONGO_URL}${process.env.DB_NAME}`\r\n    },\r\n    environment: process.env.ENVIRONMENT,\r\n    port: process.env.PORT,\r\n    rapidApi: {\r\n        key: process.env.RAPID_API_KEY,\r\n        host: process.env.RAPID_API_HOST\r\n    },\r\n    newsDataApi: {\r\n        key: process.env.NEWS_DATA_API_KEY\r\n    }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\n\n//# sourceURL=webpack://milestone1/./src/config/config.js?");

/***/ }),

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   logger: () => (/* reexport safe */ _logger__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv/config */ \"dotenv/config\");\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./src/config/config.js\");\n/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger */ \"./src/config/logger.js\");\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://milestone1/./src/config/index.js?");

/***/ }),

/***/ "./src/config/logger.js":
/*!******************************!*\
  !*** ./src/config/logger.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! winston */ \"winston\");\n/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(winston__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./src/config/config.js\");\n\r\n\r\n\r\nconst enumerateErrorFormat = winston__WEBPACK_IMPORTED_MODULE_0___default().format((info) => {\r\n  if (info instanceof Error) {\r\n    Object.assign(info, { message: info.stack });\r\n  }\r\n  return info;\r\n});\r\n\r\nconst consoleFormat = winston__WEBPACK_IMPORTED_MODULE_0___default().format.combine(\r\n    winston__WEBPACK_IMPORTED_MODULE_0___default().format.colorize(),\r\n    winston__WEBPACK_IMPORTED_MODULE_0___default().format.timestamp(),\r\n    winston__WEBPACK_IMPORTED_MODULE_0___default().format.align(),\r\n    winston__WEBPACK_IMPORTED_MODULE_0___default().format.printf((info) => {\r\n      return `${JSON.stringify(info)}`;\r\n    })\r\n  );\r\n\r\nconst logger = winston__WEBPACK_IMPORTED_MODULE_0___default().createLogger({\r\n  level: _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].environment === 'development' ? 'debug' : 'info',\r\n  format: winston__WEBPACK_IMPORTED_MODULE_0___default().format.combine(\r\n    enumerateErrorFormat(),\r\n    _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].environment === 'development' ? winston__WEBPACK_IMPORTED_MODULE_0___default().format.colorize() : winston__WEBPACK_IMPORTED_MODULE_0___default().format.uncolorize(),\r\n    winston__WEBPACK_IMPORTED_MODULE_0___default().format.prettyPrint(),\r\n    winston__WEBPACK_IMPORTED_MODULE_0___default().format.splat(),\r\n    winston__WEBPACK_IMPORTED_MODULE_0___default().format.json(),\r\n    winston__WEBPACK_IMPORTED_MODULE_0___default().format.printf(({ level, message }) => `${level}: ${typeof(message) === 'object' ? JSON.stringify(message) : message}`)\r\n  ),\r\n  transports: [\r\n    new (winston__WEBPACK_IMPORTED_MODULE_0___default().transports).Console({\r\n        stderrLevels: ['error', 'info']\r\n    }),\r\n  ],\r\n});\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logger);\n\n//# sourceURL=webpack://milestone1/./src/config/logger.js?");

/***/ }),

/***/ "./src/constants/accidents.js":
/*!************************************!*\
  !*** ./src/constants/accidents.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   accidentsConstants: () => (/* binding */ accidentsConstants)\n/* harmony export */ });\nconst accidentsConstants = {\r\n    scheduler: {\r\n        interval: '0 15 * * *'\r\n    },\r\n    sessionId: 480529,\r\n    mainUrl: \"https://data.ntsb.gov/carol-main-public/api/Query/Main\",\r\n    headers: {\r\n        \"content-type\": \"application/json\"\r\n    },\r\n    dataKeys: [\r\n        { key: \"NtsbNo\", dbKey: \"ntsbNo\" },\r\n        { key: \"CompletionStatus\", dbKey: \"completionStatus\" },\r\n        { key: \"EventType\", dbKey: \"eventType\" },\r\n        { key: \"City\", dbKey: \"city\" },\r\n        { key: \"State\", dbKey: \"state\" },\r\n        { key: \"Country\", dbKey: \"country\" },\r\n        { key: \"ReportNo\", dbKey: \"reportNo\" },\r\n        { key: \"N#\", dbKey: \"nNumber\" },\r\n        { key: \"VehicleMake\", dbKey: \"make\" },\r\n        { key: \"VehicleModel\", dbKey: \"model\" },\r\n        { key: \"HighestInjuryLevel\", dbKey: \"highestInjuryLevel\" },\r\n        { key: \"HasSafetyRec\", dbKey: \"hasSafetyRec\" },\r\n        { key: \"Mode\", dbKey: \"mode\" },\r\n        { key: \"ReportType\", dbKey: \"reportType\" },\r\n        { key: \"ReportDate\", dbKey: \"ReportDate\" }\r\n    ]\r\n};\n\n//# sourceURL=webpack://milestone1/./src/constants/accidents.js?");

/***/ }),

/***/ "./src/constants/airports.js":
/*!***********************************!*\
  !*** ./src/constants/airports.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   airportsConstants: () => (/* binding */ airportsConstants)\n/* harmony export */ });\nconst airportsConstants = {\r\n    columns: {\r\n        A: 'icao',\r\n        B: 'airportName',\r\n        C: 'city',\r\n        D: 'country',\r\n        E: 'lat_long',\r\n        F: 'elevation',\r\n        G: 'runwayLength',\r\n        H: 'surface',\r\n        I: 'fuel',\r\n        J: 'fbo',\r\n        K: 'latitude',\r\n        L: 'longitude'\r\n    }\r\n};\n\n//# sourceURL=webpack://milestone1/./src/constants/airports.js?");

/***/ }),

/***/ "./src/constants/companyStocks.js":
/*!****************************************!*\
  !*** ./src/constants/companyStocks.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   companyStocksConstants: () => (/* binding */ companyStocksConstants)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/config/index.js\");\n\r\n\r\nconst companyStocksConstants = {\r\n    scheduler: {\r\n        interval: '30 23 * * *'\r\n    },\r\n    stonkApiUrl: 'https://realstonks.p.rapidapi.com/',\r\n    stonkApiHeaders: {\r\n        'X-RapidAPI-Key': `${_config__WEBPACK_IMPORTED_MODULE_0__.config.rapidApi.key}`,\r\n        'X-RapidAPI-Host': 'realstonks.p.rapidapi.com'\r\n    },\r\n    companies: [\r\n        { key: \"GD\", name: \"General Dynamic\" },\r\n        { key: \"TXT\", name: \"Textron\" },\r\n        { key: \"BDRAF\", name: \"Bombardier\" },\r\n        { key: \"ERF\", name: \"Embraer\" },\r\n        { key: \"DUAVF\", name: \"Dassault Aviation\" },\r\n        { key: \"UP\", name: \"Wheels Up\" },\r\n        { key: \"EADSF\", name: \"Airbus\" },\r\n        { key: \"BA\", name: \"Boeing\" },\r\n        { key: \"BP\", name: \"BP PLC\" },\r\n        { key: \"NTOIF\", name: \"Neste OYJ\" },\r\n        { key: \"SHEL\", name: \"Shell PLC\" },\r\n        { key: \"HON\", name: \"Honeywell \" },\r\n        { key: \"GE\", name: \"General Electric\" },\r\n        { key: \"RYCEF\", name: \"Rolls-Royce\" },\r\n        { key: \"WMB\", name: \"Williams International\" },\r\n        { key: \"COL\", name: \"Rockwell Collins\" }\r\n    ]\r\n};\n\n//# sourceURL=webpack://milestone1/./src/constants/companyStocks.js?");

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   accidentsConstants: () => (/* reexport safe */ _accidents__WEBPACK_IMPORTED_MODULE_1__.accidentsConstants),\n/* harmony export */   airportsConstants: () => (/* reexport safe */ _airports__WEBPACK_IMPORTED_MODULE_4__.airportsConstants),\n/* harmony export */   companyStocksConstants: () => (/* reexport safe */ _companyStocks__WEBPACK_IMPORTED_MODULE_2__.companyStocksConstants),\n/* harmony export */   newsConstants: () => (/* reexport safe */ _news__WEBPACK_IMPORTED_MODULE_3__.newsConstants),\n/* harmony export */   registrationsConstants: () => (/* reexport safe */ _registrations__WEBPACK_IMPORTED_MODULE_0__.registrationsConstants)\n/* harmony export */ });\n/* harmony import */ var _registrations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registrations */ \"./src/constants/registrations.js\");\n/* harmony import */ var _accidents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accidents */ \"./src/constants/accidents.js\");\n/* harmony import */ var _companyStocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./companyStocks */ \"./src/constants/companyStocks.js\");\n/* harmony import */ var _news__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news */ \"./src/constants/news.js\");\n/* harmony import */ var _airports__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./airports */ \"./src/constants/airports.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://milestone1/./src/constants/index.js?");

/***/ }),

/***/ "./src/constants/news.js":
/*!*******************************!*\
  !*** ./src/constants/news.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   newsConstants: () => (/* binding */ newsConstants)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/config/index.js\");\n\r\n\r\nconst newsConstants = {\r\n    scheduler: {\r\n        interval: '0 10,14,18 * * *'\r\n    },\r\n    newsDataUrl: 'https://newsomaticapi.p.rapidapi.com/top',\r\n    requestHeaders: {\r\n        'X-RapidAPI-Key': `${_config__WEBPACK_IMPORTED_MODULE_0__.config.rapidApi.key}`,\r\n        'X-RapidAPI-Host': 'newsomaticapi.p.rapidapi.com'\r\n    },\r\n    requestLanguage: 'en',\r\n    keywords: [\r\n        \"private jet\",\r\n        \"business jet\",\r\n        \"private aviation\",\r\n        \"bombardier\",\r\n        \"dassault falcon\",\r\n        \"gulfstream\",\r\n        \"learjet\",\r\n        \"cessna citation\",\r\n        \"embraer legacy\",\r\n        \"embraer praetor\",\r\n        \"embraer phenom\",\r\n        \"embraer lineage\",\r\n        \"hondajet\",\r\n        \"nextant\",\r\n        \"pilatus pc-24\",\r\n        \"textron\"\r\n    ]\r\n};\n\n//# sourceURL=webpack://milestone1/./src/constants/news.js?");

/***/ }),

/***/ "./src/constants/registrations.js":
/*!****************************************!*\
  !*** ./src/constants/registrations.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   registrationsConstants: () => (/* binding */ registrationsConstants)\n/* harmony export */ });\nconst registrationsConstants = {\r\n    scheduler: {\r\n        interval: '0 8 * * *'\r\n    },\r\n    home_url: 'https://registry.faa.gov/aircraftinquiry/Search/RecentRegistrationResult',\r\n    registration_url: 'https://registry.faa.gov/aircraftinquiry/Search/NNumberResult?NNumberTxt=',\r\n    url_headers: {\r\n        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'\r\n    },\r\n    models: [\r\n        \"FALCON 10\",\r\n        \"MYSTERE-FALCON 20-C5\",\r\n        \"MYSTERE FALCON 900\",\r\n        \"FALCON 50\",\r\n        \"MYSTERE FALCON 50\",\r\n        \"CL-600-2C10\",\r\n        \"BD-100-1A10\",\r\n        \"BD-700-1A10\",\r\n        \"BD-700-1A11\",\r\n        \"BD-100-1A10\",\r\n        \"CL-600-2B16\",\r\n        \"CL-600-2A12\",\r\n        \"CL-600-2B19\",\r\n        \"CL-600-2B16(CL-604)\",\r\n        \"CL-600-2D24\",\r\n        \"BD-700-1A10\",\r\n        \"BD-700-2A12\",\r\n        \"CL-600-2C10\",\r\n        \"CL-600-2B16(CL601-3R\",\r\n        \"CL-600-2C11\",\r\n        \"CL600-2B16 (CL601-3A\",\r\n        \"CL-600-2B16 (CL-605)\",\r\n        \"CL-600-2E25\",\r\n        \"CL-215-6B11 (CL-415)\",\r\n        \"CL-600-2B19\",\r\n        \"CL-600-2B16\",\r\n        \"525C\",\r\n        \"510\",\r\n        \"560\",\r\n        \"525A\",\r\n        \"560XL\",\r\n        \"525\",\r\n        \"550\",\r\n        \"650\",\r\n        \"525B\",\r\n        \"501\",\r\n        \"680\",\r\n        \"500\",\r\n        \"750\",\r\n        \"551\",\r\n        \"560XLS\",\r\n        \"525B\",\r\n        \"525\",\r\n        \"525C\",\r\n        \"560XLS+\",\r\n        \"560XL\",\r\n        \"680A\",\r\n        \"680A\",\r\n        \"SF50\",\r\n        \"EX18\",\r\n        \"SF50\",\r\n        \"FALCON 900 EX\",\r\n        \"MYSTERE FALCON 50EX\",\r\n        \"FALCON 2000EX\",\r\n        \"FALCON 20 F\",\r\n        \"FALCON 50EX\",\r\n        \"MYSTERE-FALCON 50\",\r\n        \"FALCON 2000EX\",\r\n        \"FALCON 2000\",\r\n        \"FALCON 900EX\",\r\n        \"MYSTERE FALCON 900\",\r\n        \"FALCON 7X\",\r\n        \"FALCON 900B\",\r\n        \"FALCON 900\",\r\n        \"MYSTERE FALCON 20\",\r\n        \"FALCON 20-F5\",\r\n        \"MYSTERE-FALCON 20-F5\",\r\n        \"FALCON 900EX EASY\",\r\n        \"FALCON 20G\",\r\n        \"FALCON 900DX\",\r\n        \"FALCON 50\",\r\n        \"FALCON 20-D\",\r\n        \"FALCON 10\",\r\n        \"MYSTERE FALCON 900\",\r\n        \"FALCON 50\",\r\n        \"MYSTERE FALCON 20-F5\",\r\n        \"FALCON 20\",\r\n        \"MYSTERE FALCON 20-C5\",\r\n        \"MYSTERE FALCON 200\",\r\n        \"MYSTERE FALCON 20-D5\",\r\n        \"FAN JET FALCON SER F\",\r\n        \"FAN JET FALCON SER E\",\r\n        \"FAN JET FALCON\",\r\n        \"MYSTERE FALCON 20\",\r\n        \"FAN JET FALCON SER D\",\r\n        \"MYSTERE FALCON 900B\",\r\n        \"EA500\",\r\n        \"EA500\",\r\n        \"500\",\r\n        \"EMB-500\",\r\n        \"EMB-500\",\r\n        \"EMB-505\",\r\n        \"EMB-545\",\r\n        \"EMB-550\",\r\n        \"EMB-505\",\r\n        \"EMB-545\",\r\n        \"EMB-545 LR\",\r\n        \"EMB-135BJ\",\r\n        \"EMB-500\",\r\n        \"EMB-550\",\r\n        \"EMB-550\",\r\n        \"ERJ 190 AR\",\r\n        \"25B\",\r\n        \"24D\",\r\n        \"35\",\r\n        \"28\",\r\n        \"24E\",\r\n        \"36A\",\r\n        \"24F\",\r\n        \"25\",\r\n        \"24B\",\r\n        \"24B-A\",\r\n        \"24C\",\r\n        \"24D-A\",\r\n        \"25C\",\r\n        \"25F\",\r\n        \"29\",\r\n        \"36\",\r\n        \"25D\",\r\n        \"55\",\r\n        \"55B\",\r\n        \"55C\",\r\n        \"24\",\r\n        \"35A\",\r\n        \"35A (C-21A)\",\r\n        \"G-IV\",\r\n        \"GIV-X (G450)\",\r\n        \"695B\",\r\n        \"GV-SP (G550)\",\r\n        \"G-V\",\r\n        \"G-1159A\",\r\n        \"840\",\r\n        \"C-20A\",\r\n        \"G-IV (G400)\",\r\n        \"G1159B\",\r\n        \"GULFSTREAM 200\",\r\n        \"G-IV (G350)\",\r\n        \"GV-SP\",\r\n        \"GIV-X (G350)\",\r\n        \"GIV-X\",\r\n        \"G-IV (G300)\",\r\n        \"GV-SP (G500)\",\r\n        \"695A\",\r\n        \"G-III\",\r\n        \"GVII-G500\",\r\n        \"GVII-G600\",\r\n        \"GVII-G500\",\r\n        \"GVI (G650ER)\",\r\n        \"GV-SP (G550)\",\r\n        \"GVII-G600\",\r\n        \"GVI\",\r\n        \"GVI (G650)\",\r\n        \"GVII-G400\",\r\n        \"GVIII-G800\",\r\n        \"GVIII-G700\",\r\n        \"GULFSTREAM 200\",\r\n        \"G150\",\r\n        \"G100\",\r\n        \"GULFSTREAM 100\",\r\n        \"695A\",\r\n        \"690D\",\r\n        \"690C\",\r\n        \"695\",\r\n        \"GA-7\",\r\n        \"G-1159A\",\r\n        \"G-1159\",\r\n        \"HAWKER 900XP\",\r\n        \"HAWKER 900XP\",\r\n        \"C90GTI\",\r\n        \"C90GTI\",\r\n        \"390\",\r\n        \"390\",\r\n        \"B200\",\r\n        \"B200\",\r\n        \"400A\",\r\n        \"400A\",\r\n        \"B200GT\",\r\n        \"B200GT\",\r\n        \"G58\",\r\n        \"G58\",\r\n        \"4000\",\r\n        \"4000\",\r\n        \"B300C\",\r\n        \"B300C\",\r\n        \"B300\",\r\n        \"B300\",\r\n        \"HAWKER 4000\",\r\n        \"HAWKER 4000\",\r\n        \"HAWKER 850XP\",\r\n        \"HAWKER 850XP\",\r\n        \"HAWKER 750\",\r\n        \"HAWKER 750\",\r\n        \"C90GT\",\r\n        \"C90GT\",\r\n        \"HAWKER 800XP\",\r\n        \"HAWKER 800XP\",\r\n        \"HS.125 SERIES 700A\",\r\n        \"DH.125-3A/RA\",\r\n        \"BH.125-400A\",\r\n        \"DH.125-400A\",\r\n        \"HS 125-3A\",\r\n        \"HS-125 SERIES F-400\",\r\n        \"HA-420\",\r\n        \"HA-420\",\r\n        \"HA-420\",\r\n        \"GULFSTREAM G280\",\r\n        \"GULFSTREAM G150\",\r\n        \"GULFSTREAM G280\",\r\n        \"GULFSTREAM 200\",\r\n        \"1125 WESTWIND ASTRA\",\r\n        \"35A\",\r\n        \"60\",\r\n        \"45\",\r\n        \"31A\",\r\n        \"35A\",\r\n        \"24D\",\r\n        \"60 XR\",\r\n        \"23\",\r\n        \"24B\",\r\n        \"55\",\r\n        \"24\",\r\n        \"24A\",\r\n        \"31\",\r\n        \"25D\",\r\n        \"25\",\r\n        \"35\",\r\n        \"C-21A\",\r\n        \"MU-2B\",\r\n        \"MU-2B-25\",\r\n        \"MU-2B-60\",\r\n        \"MU-2B-40\",\r\n        \"MU-2B-20\",\r\n        \"MU-2B-36A\",\r\n        \"MU-300\",\r\n        \"MU-2B-26\",\r\n        \"MU-2B-36\",\r\n        \"TYPE ZERO\",\r\n        \"MU-2B-26A\",\r\n        \"MU-2B-35\",\r\n        \"PC-24\"\r\n    ]\r\n};\n\n//# sourceURL=webpack://milestone1/./src/constants/registrations.js?");

/***/ }),

/***/ "./src/controllers/accidents.js":
/*!**************************************!*\
  !*** ./src/controllers/accidents.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAccidents: () => (/* binding */ getAccidents)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/config/index.js\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ \"./src/services/index.js\");\n\r\n\r\n\r\nconst getAccidents = async (req, res) => {\r\n    const records = req.query.records;\r\n    const page = req.query.page;\r\n    const result = await _services__WEBPACK_IMPORTED_MODULE_1__.accidentsService.fetchAccidentsFromDB(records, page);\r\n    _config__WEBPACK_IMPORTED_MODULE_0__.logger.info({\r\n        event: 'Controller: Records from DB',\r\n        result\r\n    })\r\n    res.status(result.statusCode).json(result);\r\n};\n\n//# sourceURL=webpack://milestone1/./src/controllers/accidents.js?");

/***/ }),

/***/ "./src/controllers/airports.js":
/*!*************************************!*\
  !*** ./src/controllers/airports.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createAirportsByFile: () => (/* binding */ createAirportsByFile),\n/* harmony export */   getAirports: () => (/* binding */ getAirports)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/config/index.js\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ \"./src/services/index.js\");\n\r\n\r\n\r\nconst getAirports = async (req, res) => {\r\n    const records = req.query.records;\r\n    const page = req.query.page;\r\n    const result = await _services__WEBPACK_IMPORTED_MODULE_1__.airportsService.fetchAirportRecords(records, page);\r\n    _config__WEBPACK_IMPORTED_MODULE_0__.logger.info({\r\n        event: 'Controller: Records from DB',\r\n        result\r\n    })\r\n    res.status(result.statusCode).json(result);\r\n};\r\n\r\nconst createAirportsByFile = async (req, res) => {\r\n    const result = await _services__WEBPACK_IMPORTED_MODULE_1__.airportsService.readExcel();\r\n    _config__WEBPACK_IMPORTED_MODULE_0__.logger.info({\r\n        event: 'Controller: Creating new records',\r\n        result\r\n    })\r\n    res.status(result.statusCode).json(result);\r\n}\n\n//# sourceURL=webpack://milestone1/./src/controllers/airports.js?");

/***/ }),

/***/ "./src/controllers/index.js":
/*!**********************************!*\
  !*** ./src/controllers/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   accidentsController: () => (/* reexport module object */ _accidents__WEBPACK_IMPORTED_MODULE_2__),\n/* harmony export */   airportsController: () => (/* reexport module object */ _airports__WEBPACK_IMPORTED_MODULE_1__),\n/* harmony export */   companyStocksController: () => (/* reexport module object */ _stocks__WEBPACK_IMPORTED_MODULE_3__),\n/* harmony export */   newsController: () => (/* reexport module object */ _news__WEBPACK_IMPORTED_MODULE_0__),\n/* harmony export */   registrationsController: () => (/* reexport module object */ _registrations__WEBPACK_IMPORTED_MODULE_4__)\n/* harmony export */ });\n/* harmony import */ var _news__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news */ \"./src/controllers/news.js\");\n/* harmony import */ var _airports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./airports */ \"./src/controllers/airports.js\");\n/* harmony import */ var _accidents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accidents */ \"./src/controllers/accidents.js\");\n/* harmony import */ var _stocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stocks */ \"./src/controllers/stocks.js\");\n/* harmony import */ var _registrations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registrations */ \"./src/controllers/registrations.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://milestone1/./src/controllers/index.js?");

/***/ }),

/***/ "./src/controllers/news.js":
/*!*********************************!*\
  !*** ./src/controllers/news.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getNews: () => (/* binding */ getNews)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/config/index.js\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ \"./src/services/index.js\");\n\r\n\r\n\r\nconst getNews = async (req, res) => {\r\n    const records = req.query.records;\r\n    const page = req.query.page;\r\n    const result = await _services__WEBPACK_IMPORTED_MODULE_1__.newsService.fetchNewsFromDB(records, page);\r\n    _config__WEBPACK_IMPORTED_MODULE_0__.logger.info({\r\n        event: 'Controller: Records from DB',\r\n        result\r\n    })\r\n    res.status(result.statusCode).json(result);\r\n};\n\n//# sourceURL=webpack://milestone1/./src/controllers/news.js?");

/***/ }),

/***/ "./src/controllers/registrations.js":
/*!******************************************!*\
  !*** ./src/controllers/registrations.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getRegistrations: () => (/* binding */ getRegistrations)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/config/index.js\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ \"./src/services/index.js\");\n\r\n\r\n\r\nconst getRegistrations = async (req, res) => {\r\n    const records = req.query.records;\r\n    const page = req.query.page;\r\n    const result = await _services__WEBPACK_IMPORTED_MODULE_1__.registrationsService.fetchRegistrationsFromDB(records, page);\r\n    _config__WEBPACK_IMPORTED_MODULE_0__.logger.info({\r\n        event: 'Controller: Records from DB',\r\n        result\r\n    })\r\n    res.status(result.statusCode).json(result);\r\n};\n\n//# sourceURL=webpack://milestone1/./src/controllers/registrations.js?");

/***/ }),

/***/ "./src/controllers/stocks.js":
/*!***********************************!*\
  !*** ./src/controllers/stocks.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getStocks: () => (/* binding */ getStocks)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/config/index.js\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ \"./src/services/index.js\");\n\r\n\r\n\r\nconst getStocks = async (req, res) => {\r\n    const records = req.query.records;\r\n    const page = req.query.page;\r\n    const result = await _services__WEBPACK_IMPORTED_MODULE_1__.companyStocksService.fetchStocksFromDB(records, page);\r\n    _config__WEBPACK_IMPORTED_MODULE_0__.logger.info({\r\n        event: 'Controller: Records from DB',\r\n        result\r\n    })\r\n    res.status(result.statusCode).json(result);\r\n};\n\n//# sourceURL=webpack://milestone1/./src/controllers/stocks.js?");

/***/ }),

/***/ "./src/db/index.js":
/*!*************************!*\
  !*** ./src/db/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./src/config/index.js\");\n\r\n\r\n\r\nmongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(_config__WEBPACK_IMPORTED_MODULE_1__.config.mongoose.url)\r\n.then(() => {\r\n    console.log('MongoDB URL => ', _config__WEBPACK_IMPORTED_MODULE_1__.config.mongoose.url);\r\n    _config__WEBPACK_IMPORTED_MODULE_1__.logger.info('Connected to MongoDB');\r\n})\r\n.catch(err => {\r\n    _config__WEBPACK_IMPORTED_MODULE_1__.logger.error(err);\r\n});\r\n\r\n\n\n//# sourceURL=webpack://milestone1/./src/db/index.js?");

/***/ }),

/***/ "./src/db/models/accidents.js":
/*!************************************!*\
  !*** ./src/db/models/accidents.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst accidents = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\r\n    ntsbNo: {\r\n        type: String,\r\n        require: true,\r\n        unique: true\r\n    },\r\n    completionStatus: {\r\n        type: String\r\n    },\r\n    eventType: {\r\n        type: String\r\n    },\r\n    city: {\r\n        type: String\r\n    },\r\n    state: {\r\n        type: String\r\n    },\r\n    country: {\r\n        type: String\r\n    },\r\n    reportNo: {\r\n        type: String\r\n    },\r\n    nNumber: {\r\n        type: String\r\n    },\r\n    make: {\r\n        type: String\r\n    },\r\n    model: {\r\n        type: String\r\n    },\r\n    highestInjuryLevel: {\r\n        type: String\r\n    },\r\n    hasSafetyRec: {\r\n        type: String\r\n    },\r\n    mode: {\r\n        type: String\r\n    },\r\n    reportType: {\r\n        type: String\r\n    },\r\n    ReportDate: {\r\n        type: String\r\n    }\r\n});\r\nconst Accidents = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Accidents', accidents);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accidents);\r\n\r\n\n\n//# sourceURL=webpack://milestone1/./src/db/models/accidents.js?");

/***/ }),

/***/ "./src/db/models/airports.js":
/*!***********************************!*\
  !*** ./src/db/models/airports.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst airports = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\r\n    icao: {\r\n        type: String,\r\n        require: true,\r\n        unique: true\r\n    },\r\n    airportName: {\r\n        type: String\r\n    },\r\n    city: {\r\n        type: String\r\n    },\r\n    country: {\r\n        type: String\r\n    },\r\n    lat_long: {\r\n        type: String\r\n    },\r\n    elevation: {\r\n        type: String\r\n    },\r\n    runwayLength: {\r\n        type: String\r\n    },\r\n    surface: {\r\n        type: String\r\n    },\r\n    fuel: {\r\n        type: String\r\n    },\r\n    fbo: {\r\n        type: String\r\n    },\r\n    lat: {\r\n        type: String\r\n    },\r\n    lng: {\r\n        type: String\r\n    }\r\n});\r\nconst Airports = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Airports', airports);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Airports);\r\n\r\n\n\n//# sourceURL=webpack://milestone1/./src/db/models/airports.js?");

/***/ }),

/***/ "./src/db/models/index.js":
/*!********************************!*\
  !*** ./src/db/models/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Accidents: () => (/* reexport safe */ _accidents__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   Airports: () => (/* reexport safe */ _airports__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   News: () => (/* reexport safe */ _news__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   Registrations: () => (/* reexport safe */ _registrations__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   Stocks: () => (/* reexport safe */ _stocks__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _news__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news */ \"./src/db/models/news.js\");\n/* harmony import */ var _stocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stocks */ \"./src/db/models/stocks.js\");\n/* harmony import */ var _airports__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./airports */ \"./src/db/models/airports.js\");\n/* harmony import */ var _accidents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accidents */ \"./src/db/models/accidents.js\");\n/* harmony import */ var _registrations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registrations */ \"./src/db/models/registrations.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://milestone1/./src/db/models/index.js?");

/***/ }),

/***/ "./src/db/models/news.js":
/*!*******************************!*\
  !*** ./src/db/models/news.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst news = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\r\n    searchKeyword: {\r\n        type: String,\r\n        require: true\r\n    },\r\n    title: {\r\n        type: String,\r\n        unique: true,\r\n        maxLength: 1024\r\n    },\r\n    content: {\r\n        type: String,\r\n        maxLength: 1024\r\n    },\r\n    url: {\r\n        type: String,\r\n        maxLength: 1024\r\n    },\r\n    description: {\r\n        type: String,\r\n        maxLength: 1024\r\n    },\r\n    category: {\r\n        type: String\r\n    },\r\n    language: {\r\n        type: String\r\n    },\r\n    author: {\r\n        type: String\r\n    },\r\n    publishedAt: {\r\n        type: String\r\n    },\r\n    sourceName: {\r\n        type: String\r\n    }\r\n});\r\nconst News = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('News', news);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (News);\r\n\r\n\n\n//# sourceURL=webpack://milestone1/./src/db/models/news.js?");

/***/ }),

/***/ "./src/db/models/registrations.js":
/*!****************************************!*\
  !*** ./src/db/models/registrations.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst registrations = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\r\n    regNumber: {\r\n        type: String,\r\n        require: true,\r\n        unique: true\r\n    },\r\n    serialNumber: {\r\n        type: String\r\n    },\r\n    model: {\r\n        type: String\r\n    },\r\n    mfrYear: {\r\n        type: String\r\n    },\r\n    typeRegistration: {\r\n        type: String\r\n    },\r\n    status: {\r\n        type: String\r\n    },\r\n    certificateIssueDate: {\r\n        type: String\r\n    },\r\n    typeEngine: {\r\n        type: String\r\n    },\r\n    modelSCodebase8: {\r\n        type: String\r\n    },\r\n    modelSCodebase16: {\r\n        type: String\r\n    },\r\n    fractionalOwner: {\r\n        type: String\r\n    },\r\n    registeredOwnerName: {\r\n        type: String\r\n    },\r\n    registeredOwnerStreet: {\r\n        type: String\r\n    },\r\n    registeredOwnerCity: {\r\n        type: String\r\n    },\r\n    registeredOwnerState: {\r\n        type: String\r\n    },\r\n    registeredOwnerZipCode: {\r\n        type: String\r\n    },\r\n    registeredOwnerCountry: {\r\n        type: String\r\n    },\r\n    engineManufacturer: {\r\n        type: String\r\n    },\r\n    engineModel: {\r\n        type: String\r\n    },\r\n    awDate: {\r\n        type: String\r\n    }\r\n});\r\nconst Registrations = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Registrations', registrations);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Registrations);\r\n\r\n\n\n//# sourceURL=webpack://milestone1/./src/db/models/registrations.js?");

/***/ }),

/***/ "./src/db/models/stocks.js":
/*!*********************************!*\
  !*** ./src/db/models/stocks.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst stocks = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\r\n    companyCode: {\r\n        type: String,\r\n        require: true,\r\n        unique: true\r\n    },\r\n    companyName: {\r\n        type: String,\r\n        require: true,\r\n        unique: true\r\n    },\r\n    price: {\r\n        type: Number\r\n    },\r\n    changePoint: {\r\n        type: Number\r\n    },\r\n    changePercentage: {\r\n        type: Number\r\n    },\r\n    date: {\r\n        type: String\r\n    }\r\n});\r\nconst Stocks = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Stocks', stocks);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stocks);\r\n\r\n\n\n//# sourceURL=webpack://milestone1/./src/db/models/stocks.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ \"./src/config/index.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ \"./src/routes/index.js\");\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./db */ \"./src/db/index.js\");\n/* harmony import */ var _schedulers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schedulers */ \"./src/schedulers/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\r\napp.use(cors__WEBPACK_IMPORTED_MODULE_2___default()());\r\n\r\n// To keep Heroku app alive\r\nsetInterval(() => {\r\n    http__WEBPACK_IMPORTED_MODULE_1___default().get(\"https://healthcheck-backend-888c77da0ba5.herokuapp.com/\");\r\n    console.log(\"App is alive!\");\r\n  }, 20 * 60 * 1000);\r\n\r\napp.use('/aircraft', _routes__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\r\napp.get('/', (req, res) => {\r\n    res.send('Welcome to Healthcheck App!');\r\n});\r\n\r\nconst port = _config__WEBPACK_IMPORTED_MODULE_3__.config.port;\r\n\r\napp.listen(port, () => {\r\n    _config__WEBPACK_IMPORTED_MODULE_3__.logger.info(`App is running on port ${port}`);\r\n});\r\n\n\n//# sourceURL=webpack://milestone1/./src/index.js?");

/***/ }),

/***/ "./src/routes/accidents.js":
/*!*********************************!*\
  !*** ./src/routes/accidents.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers */ \"./src/controllers/index.js\");\n\r\n\r\n\r\nconst accidentsRouter = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\r\n\r\naccidentsRouter.route('/').get(_controllers__WEBPACK_IMPORTED_MODULE_1__.accidentsController.getAccidents);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accidentsRouter);\n\n//# sourceURL=webpack://milestone1/./src/routes/accidents.js?");

/***/ }),

/***/ "./src/routes/airports.js":
/*!********************************!*\
  !*** ./src/routes/airports.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers */ \"./src/controllers/index.js\");\n\r\n\r\n\r\nconst airportsRouter = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\r\n\r\nairportsRouter.route('/').get(_controllers__WEBPACK_IMPORTED_MODULE_1__.airportsController.getAirports);\r\nairportsRouter.route('/create').post(_controllers__WEBPACK_IMPORTED_MODULE_1__.airportsController.createAirportsByFile);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (airportsRouter);\n\n//# sourceURL=webpack://milestone1/./src/routes/airports.js?");

/***/ }),

/***/ "./src/routes/companyStocks.js":
/*!*************************************!*\
  !*** ./src/routes/companyStocks.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers */ \"./src/controllers/index.js\");\n\r\n\r\n\r\nconst stocksRouter = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\r\n\r\nstocksRouter.route('/').get(_controllers__WEBPACK_IMPORTED_MODULE_1__.companyStocksController.getStocks);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stocksRouter);\n\n//# sourceURL=webpack://milestone1/./src/routes/companyStocks.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _accidents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accidents */ \"./src/routes/accidents.js\");\n/* harmony import */ var _registrations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registrations */ \"./src/routes/registrations.js\");\n/* harmony import */ var _companyStocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./companyStocks */ \"./src/routes/companyStocks.js\");\n/* harmony import */ var _airports__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./airports */ \"./src/routes/airports.js\");\n/* harmony import */ var _news__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news */ \"./src/routes/news.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\r\n\r\nrouter.use('/accidents', _accidents__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\nrouter.use('/registrations', _registrations__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\nrouter.use('/stocks', _companyStocks__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\nrouter.use('/news', _news__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\r\nrouter.use('/airports', _airports__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://milestone1/./src/routes/index.js?");

/***/ }),

/***/ "./src/routes/news.js":
/*!****************************!*\
  !*** ./src/routes/news.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers */ \"./src/controllers/index.js\");\n\r\n\r\n\r\nconst newsRouter = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\r\n\r\nnewsRouter.route('/').get(_controllers__WEBPACK_IMPORTED_MODULE_1__.newsController.getNews);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newsRouter);\n\n//# sourceURL=webpack://milestone1/./src/routes/news.js?");

/***/ }),

/***/ "./src/routes/registrations.js":
/*!*************************************!*\
  !*** ./src/routes/registrations.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers */ \"./src/controllers/index.js\");\n\r\n\r\n\r\nconst registrationsRouter = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\r\n\r\nregistrationsRouter.route('/').get(_controllers__WEBPACK_IMPORTED_MODULE_1__.registrationsController.getRegistrations);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (registrationsRouter);\n\n//# sourceURL=webpack://milestone1/./src/routes/registrations.js?");

/***/ }),

/***/ "./src/schedulers/accidentsScheduler.js":
/*!**********************************************!*\
  !*** ./src/schedulers/accidentsScheduler.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var node_cron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-cron */ \"node-cron\");\n/* harmony import */ var node_cron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_cron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ \"./src/config/index.js\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ \"./src/services/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ \"./src/constants/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst interval = _constants__WEBPACK_IMPORTED_MODULE_4__.accidentsConstants.scheduler.interval;\r\n\r\nconst job = async () => {\r\n    _config__WEBPACK_IMPORTED_MODULE_2__.logger.info('Scheduler Started');\r\n    const { sessionId } = _constants__WEBPACK_IMPORTED_MODULE_4__.accidentsConstants;\r\n    const startDate = _utils__WEBPACK_IMPORTED_MODULE_5__.accidentsParser.getFirstDateOfLastMonth();\r\n    const lastDate = _utils__WEBPACK_IMPORTED_MODULE_5__.accidentsParser.getLastDateOfLastMonth();\r\n    const accidents = await _services__WEBPACK_IMPORTED_MODULE_3__.accidentsService.fetchAccidents(sessionId, startDate, lastDate);\r\n    _config__WEBPACK_IMPORTED_MODULE_2__.logger.info({\r\n        event: 'Scheduler: Fetch accidents after all Filters',\r\n        accidents\r\n    });\r\n    if(accidents.length > 0){\r\n        const response = await _services__WEBPACK_IMPORTED_MODULE_3__.accidentsService.createAccident(accidents) || [];\r\n        _config__WEBPACK_IMPORTED_MODULE_2__.logger.info(response);\r\n    }else{\r\n        _config__WEBPACK_IMPORTED_MODULE_2__.logger.info({\r\n            event: 'Scheduler: No new accidents found. :-)'\r\n        });\r\n    }\r\n}\r\n\r\nnode_cron__WEBPACK_IMPORTED_MODULE_0___default().schedule(interval, job);\n\n//# sourceURL=webpack://milestone1/./src/schedulers/accidentsScheduler.js?");

/***/ }),

/***/ "./src/schedulers/companyStocksScheduler.js":
/*!**************************************************!*\
  !*** ./src/schedulers/companyStocksScheduler.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var node_cron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-cron */ \"node-cron\");\n/* harmony import */ var node_cron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_cron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./src/config/index.js\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ \"./src/services/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ \"./src/constants/index.js\");\n\r\n\r\n\r\n\r\n\r\nconst interval = _constants__WEBPACK_IMPORTED_MODULE_3__.accidentsConstants.scheduler.interval;\r\n\r\nconst job = async () => {\r\n    _config__WEBPACK_IMPORTED_MODULE_1__.logger.info('Scheduler Started');\r\n    const companyStocks = await _services__WEBPACK_IMPORTED_MODULE_2__.companyStocksService.fetchCompanyStocks() || [];\r\n    _config__WEBPACK_IMPORTED_MODULE_1__.logger.info({\r\n        event: 'Scheduler: Fetch company stocks',\r\n        companyStocks\r\n    });\r\n    if(companyStocks.length > 0){\r\n        const response = await _services__WEBPACK_IMPORTED_MODULE_2__.companyStocksService.createCompanyStocks(companyStocks);\r\n        _config__WEBPACK_IMPORTED_MODULE_1__.logger.info(response);\r\n    }else{\r\n        _config__WEBPACK_IMPORTED_MODULE_1__.logger.info({\r\n            event: 'Scheduler: No company stocks found. :-)'\r\n        });\r\n    }\r\n}\r\n\r\nnode_cron__WEBPACK_IMPORTED_MODULE_0___default().schedule(interval, job);\n\n//# sourceURL=webpack://milestone1/./src/schedulers/companyStocksScheduler.js?");

/***/ }),

/***/ "./src/schedulers/index.js":
/*!*********************************!*\
  !*** ./src/schedulers/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _newsScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newsScheduler */ \"./src/schedulers/newsScheduler.js\");\n/* harmony import */ var _accidentsScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accidentsScheduler */ \"./src/schedulers/accidentsScheduler.js\");\n/* harmony import */ var _registrationsScheduler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registrationsScheduler */ \"./src/schedulers/registrationsScheduler.js\");\n/* harmony import */ var _companyStocksScheduler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./companyStocksScheduler */ \"./src/schedulers/companyStocksScheduler.js\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://milestone1/./src/schedulers/index.js?");

/***/ }),

/***/ "./src/schedulers/newsScheduler.js":
/*!*****************************************!*\
  !*** ./src/schedulers/newsScheduler.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var node_cron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-cron */ \"node-cron\");\n/* harmony import */ var node_cron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_cron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./src/config/index.js\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ \"./src/services/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ \"./src/constants/index.js\");\n\r\n\r\n\r\n\r\n\r\nconst interval = _constants__WEBPACK_IMPORTED_MODULE_3__.newsConstants.scheduler.interval;\r\n\r\nconst job = async () => {\r\n    _config__WEBPACK_IMPORTED_MODULE_1__.logger.info('News Scheduler Started');\r\n    const news = await _services__WEBPACK_IMPORTED_MODULE_2__.newsService.fetchNews() || [];\r\n    _config__WEBPACK_IMPORTED_MODULE_1__.logger.info({\r\n        event: 'Scheduler: Fetch News',\r\n        news\r\n    });\r\n    if(news.length > 0){\r\n        for(let i in news){\r\n            if(news[i].length > 0){\r\n                const response = await _services__WEBPACK_IMPORTED_MODULE_2__.newsService.createNews(news[i]);\r\n                _config__WEBPACK_IMPORTED_MODULE_1__.logger.info(response);\r\n            }\r\n        }\r\n    }else{\r\n        _config__WEBPACK_IMPORTED_MODULE_1__.logger.info({\r\n            event: 'Scheduler: No news found. :-)'\r\n        });\r\n    }\r\n}\r\n\r\nnode_cron__WEBPACK_IMPORTED_MODULE_0___default().schedule(interval, job);\n\n//# sourceURL=webpack://milestone1/./src/schedulers/newsScheduler.js?");

/***/ }),

/***/ "./src/schedulers/registrationsScheduler.js":
/*!**************************************************!*\
  !*** ./src/schedulers/registrationsScheduler.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var node_cron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-cron */ \"node-cron\");\n/* harmony import */ var node_cron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_cron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./src/config/index.js\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ \"./src/services/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ \"./src/constants/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst interval = _constants__WEBPACK_IMPORTED_MODULE_3__.registrationsConstants.scheduler.interval;\r\n\r\nconst filterRegistrartionsWithDate = async (registrations, previousDate) => {;\r\n    return registrations.filter(registration => registration.certIssueDate !== previousDate);\r\n}\r\n\r\nconst filterRegistrartionsWithModel = async(registrations) => {\r\n    const { models } = _constants__WEBPACK_IMPORTED_MODULE_3__.registrationsConstants;\r\n    let newRegistrations = [];\r\n    registrations.forEach(registration => {\r\n        const modelFound = models.includes(registration.model);\r\n        if(modelFound){\r\n            newRegistrations.push(registration.nNumber);\r\n        }\r\n    });\r\n    return newRegistrations;\r\n}\r\n\r\n\r\nconst fetchRegistrations = async () => {\r\n    let allRegistrations = [];\r\n    let dataEnded = false;\r\n    let lastPage = await _services__WEBPACK_IMPORTED_MODULE_2__.registrationsService.fetchLastPageNumber();\r\n    _config__WEBPACK_IMPORTED_MODULE_1__.logger.info({\r\n        event: 'Scheduler: Fetch Last Page',\r\n        lastPage\r\n    });\r\n    let page = lastPage;\r\n    let previousDate = \"\";\r\n    while(!dataEnded){\r\n        const registrations = await _services__WEBPACK_IMPORTED_MODULE_2__.registrationsService.fetchRegistrations(page);\r\n        if(page === lastPage){\r\n            const lastRecord = registrations[registrations.length - 1].certIssueDate;\r\n            previousDate = await _utils__WEBPACK_IMPORTED_MODULE_4__.registrationParser.fetchPreviousDayForRegistrations(lastRecord);\r\n        }\r\n        page = page - 1;\r\n        dataEnded = !!registrations.find(registration => registration.certIssueDate === previousDate);\r\n        allRegistrations = [...allRegistrations, ...registrations]\r\n    }\r\n    _config__WEBPACK_IMPORTED_MODULE_1__.logger.info({\r\n        event: 'Scheduler: Fetch All Registrations',\r\n        allRegistrations\r\n    });\r\n    const latestRegistrations =  await filterRegistrartionsWithDate(allRegistrations, previousDate);\r\n    _config__WEBPACK_IMPORTED_MODULE_1__.logger.info({\r\n        event: 'Scheduler: Filtered Registrations with Date',\r\n        latestRegistrations\r\n    });\r\n    const filteredRegistrations = await filterRegistrartionsWithModel(latestRegistrations);\r\n    _config__WEBPACK_IMPORTED_MODULE_1__.logger.info({\r\n        event: 'Scheduler: Filtered Registrations with Models',\r\n        filteredRegistrations\r\n    });\r\n    return filteredRegistrations;\r\n}\r\n\r\nconst job = async () => {\r\n    _config__WEBPACK_IMPORTED_MODULE_1__.logger.info('Scheduler Started');\r\n    const registrations = await fetchRegistrations() || [];\r\n    _config__WEBPACK_IMPORTED_MODULE_1__.logger.info({\r\n        event: 'Scheduler: Fetch Registrations after all Filters',\r\n        registrations\r\n    });\r\n    if(registrations.length > 0){\r\n        registrations.forEach(async(registration) => {\r\n            const record = await _services__WEBPACK_IMPORTED_MODULE_2__.registrationsService.fetchRegistrationRecord(registration);\r\n            const response = await _services__WEBPACK_IMPORTED_MODULE_2__.registrationsService.createRegistration(record);\r\n            _config__WEBPACK_IMPORTED_MODULE_1__.logger.info(response);\r\n        });\r\n    }else{\r\n        _config__WEBPACK_IMPORTED_MODULE_1__.logger.info({\r\n            event: 'Scheduler: No new registrations found. :-)'\r\n        });\r\n    }\r\n}\r\n\r\nnode_cron__WEBPACK_IMPORTED_MODULE_0___default().schedule(interval, job);\n\n//# sourceURL=webpack://milestone1/./src/schedulers/registrationsScheduler.js?");

/***/ }),

/***/ "./src/services/accidents.js":
/*!***********************************!*\
  !*** ./src/services/accidents.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createAccident: () => (/* binding */ createAccident),\n/* harmony export */   fetchAccidents: () => (/* binding */ fetchAccidents),\n/* harmony export */   fetchAccidentsFromDB: () => (/* binding */ fetchAccidentsFromDB)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/config/index.js\");\n/* harmony import */ var _db_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db/models */ \"./src/db/models/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ \"./src/constants/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n\r\n\r\n\r\n\r\n\r\nconst createAccident = async (data) => {\r\n    try{\r\n        _config__WEBPACK_IMPORTED_MODULE_0__.logger.info({\r\n            event: 'Service: New Accident',\r\n            data\r\n        });\r\n        const accident = await _db_models__WEBPACK_IMPORTED_MODULE_1__.Accidents.insertMany(data, { ordered: false });\r\n        _config__WEBPACK_IMPORTED_MODULE_0__.logger.info({\r\n            event: 'Service: Record added in Mongo DB',\r\n            accident\r\n        });\r\n        return accident;\r\n    }catch(err){\r\n        if(err.code === 11000){\r\n            _config__WEBPACK_IMPORTED_MODULE_0__.logger.info('Service: Record already exists.');\r\n        }\r\n        _config__WEBPACK_IMPORTED_MODULE_0__.logger.error(err);\r\n    }\r\n}\r\n\r\nconst fetchAccidentsFromDB = async (records, page) => {\r\n    try{\r\n        const numberOfRecords = records || 10;\r\n        const currentPage = page - 1 || 0;\r\n        _config__WEBPACK_IMPORTED_MODULE_0__.logger.info({\r\n            event: 'Service: New Request Accidents from DB',\r\n            data: {\r\n                numberOfRecords,\r\n                currentPage\r\n            }\r\n        });\r\n        const accidents = await _db_models__WEBPACK_IMPORTED_MODULE_1__.Accidents.find().skip(numberOfRecords * currentPage).limit(numberOfRecords);\r\n        _config__WEBPACK_IMPORTED_MODULE_0__.logger.info({\r\n            event: 'Service: Accidents from DB',\r\n            accidents\r\n        });\r\n        return {\r\n            status: 'Success',\r\n            statusCode: 200,\r\n            count: accidents.length,\r\n            data: accidents\r\n        };\r\n    }catch(err){\r\n        _config__WEBPACK_IMPORTED_MODULE_0__.logger.error(err);\r\n    }\r\n}\r\n\r\n\r\nconst fetchAccidents = async (sessionId, startingDate, endingDate) => {\r\n    try{\r\n        _config__WEBPACK_IMPORTED_MODULE_0__.logger.info({\r\n            event: 'Service: Request for Accidents ',\r\n            data: { sessionId, startingDate, endingDate }\r\n        });\r\n        const { mainUrl, headers } = _constants__WEBPACK_IMPORTED_MODULE_2__.accidentsConstants;\r\n        const options = {\r\n            headers: headers,\r\n            method: 'POST',\r\n            body: JSON.stringify(await _utils__WEBPACK_IMPORTED_MODULE_3__.accidentsParser.getAccidentsRequestBody(sessionId, startingDate, endingDate))\r\n        };\r\n        const data = await (0,_utils__WEBPACK_IMPORTED_MODULE_3__.fetchJsonData)(mainUrl, options);\r\n        const accidents = _utils__WEBPACK_IMPORTED_MODULE_3__.accidentsParser.getFilteredAccidents(data); \r\n        _config__WEBPACK_IMPORTED_MODULE_0__.logger.info({\r\n            event: 'Service: All Accidents',\r\n            accidents\r\n        });\r\n        return accidents;\r\n    }catch(err){\r\n        _config__WEBPACK_IMPORTED_MODULE_0__.logger.error(err);\r\n    }\r\n}\n\n//# sourceURL=webpack://milestone1/./src/services/accidents.js?");

/***/ }),

/***/ "./src/services/airports.js":
/*!**********************************!*\
  !*** ./src/services/airports.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchAirportRecords: () => (/* binding */ fetchAirportRecords),\n/* harmony export */   readExcel: () => (/* binding */ readExcel)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var convert_excel_to_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! convert-excel-to-json */ \"convert-excel-to-json\");\n/* harmony import */ var convert_excel_to_json__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(convert_excel_to_json__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ \"./src/config/index.js\");\n/* harmony import */ var _db_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../db/models */ \"./src/db/models/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ \"./src/constants/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst readExcel = async () => {\r\n    try{\r\n        const { columns } = _constants__WEBPACK_IMPORTED_MODULE_4__.airportsConstants;\r\n        const { formatAirportData } = _utils__WEBPACK_IMPORTED_MODULE_5__.airportsParser;\r\n        const files = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync('./');\r\n        const excelFiles = files.map(file => {\r\n            const fileNameArray = file.split(\".\");\r\n            if(fileNameArray[fileNameArray.length - 1] === 'xlsx'){\r\n                return file;\r\n            }\r\n        }).filter(file => !!file);\r\n        if(excelFiles.length > 1 || excelFiles.length === 0){\r\n            return {\r\n                sccess: false,\r\n                statusCode: 422,\r\n                error: 'There is no file or multiple files. Please keep just 1 *.xslx file.'\r\n            }\r\n        }\r\n        const result = convert_excel_to_json__WEBPACK_IMPORTED_MODULE_1___default()({\r\n            sourceFile: `./${excelFiles[0]}`,\r\n            columnToKey: columns\r\n        });\r\n        if(result.Sheet1){\r\n            const data = result.Sheet1;\r\n            data.shift();\r\n            const validRecords = [], invalidRecords = [];\r\n            for(let i in data){\r\n                const record = formatAirportData(data[i]);\r\n                if(!!record) validRecords.push(record);\r\n                else invalidRecords.push(data[i]);\r\n            }\r\n            const response = await _db_models__WEBPACK_IMPORTED_MODULE_3__.Airports.insertMany(validRecords, { ordered: false });\r\n            const obj = {\r\n                success: true,\r\n                statusCode: 200,\r\n                totalRecords: data.length,\r\n                success: response.length,\r\n                failed: invalidRecords.length,\r\n                failedRecords: invalidRecords\r\n            };\r\n            _config__WEBPACK_IMPORTED_MODULE_2__.logger.info({\r\n                event: 'Service: Records added in MongoDB',\r\n                data: obj\r\n            });\r\n            return obj;\r\n        }\r\n    }catch(err){\r\n        _config__WEBPACK_IMPORTED_MODULE_2__.logger.error(err);\r\n    }\r\n}\r\n\r\nconst fetchAirportRecords = async (records, page) => {\r\n    try{\r\n        const numberOfRecords = records || 10;\r\n        const currentPage = page - 1 || 0;\r\n        _config__WEBPACK_IMPORTED_MODULE_2__.logger.info({\r\n            event: 'Service: New Request airports from DB',\r\n            data: {\r\n                numberOfRecords,\r\n                currentPage\r\n            }\r\n        });\r\n        const airports = await _db_models__WEBPACK_IMPORTED_MODULE_3__.Airports.find().skip(numberOfRecords * currentPage).limit(numberOfRecords);\r\n        _config__WEBPACK_IMPORTED_MODULE_2__.logger.info({\r\n            event: 'Service: Airports from DB',\r\n            airports\r\n        });\r\n        return {\r\n            status: 'Success',\r\n            statusCode: 200,\r\n            count: airports.length,\r\n            data: airports\r\n        };\r\n    }catch(err){\r\n        _config__WEBPACK_IMPORTED_MODULE_2__.logger.error(err);\r\n    }\r\n}\n\n//# sourceURL=webpack://milestone1/./src/services/airports.js?");

/***/ }),

/***/ "./src/services/companyStocks.js":
/*!***************************************!*\
  !*** ./src/services/companyStocks.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCompanyStocks: () => (/* binding */ createCompanyStocks),\n/* harmony export */   fetchCompanyStocks: () => (/* binding */ fetchCompanyStocks),\n/* harmony export */   fetchStocksFromDB: () => (/* binding */ fetchStocksFromDB)\n/* harmony export */ });\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./src/config/index.js\");\n/* harmony import */ var _db_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../db/models */ \"./src/db/models/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ \"./src/constants/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst createCompanyStocks = async (data) => {\r\n    try{\r\n        _config__WEBPACK_IMPORTED_MODULE_1__.logger.info({\r\n            event: 'Service: New Accident',\r\n            data\r\n        });\r\n        const companyStocks = await _db_models__WEBPACK_IMPORTED_MODULE_2__.Stocks.insertMany(data);\r\n        _config__WEBPACK_IMPORTED_MODULE_1__.logger.info({\r\n            event: 'Service: Records added in Mongo DB',\r\n            companyStocks\r\n        });\r\n        return companyStocks;\r\n    }catch(err){\r\n        if(err.code === 11000){\r\n            _config__WEBPACK_IMPORTED_MODULE_1__.logger.info('Service: Record already exists.');\r\n        }\r\n        _config__WEBPACK_IMPORTED_MODULE_1__.logger.error(err);\r\n    }\r\n}\r\n\r\nconst fetchStocksFromDB = async (records, page) => {\r\n    try{\r\n        const numberOfRecords = records || 10;\r\n        const currentPage = page - 1 || 0;\r\n        _config__WEBPACK_IMPORTED_MODULE_1__.logger.info({\r\n            event: 'Service: New Request Stocks from DB',\r\n            data: {\r\n                numberOfRecords,\r\n                currentPage\r\n            }\r\n        });\r\n        const stocks = await _db_models__WEBPACK_IMPORTED_MODULE_2__.Stocks.find().skip(numberOfRecords * currentPage).limit(numberOfRecords);\r\n        _config__WEBPACK_IMPORTED_MODULE_1__.logger.info({\r\n            event: 'Service: Stocks from DB',\r\n            stocks\r\n        });\r\n        return {\r\n            status: 'Success',\r\n            statusCode: 200,\r\n            count: stocks.length,\r\n            data: stocks\r\n        };\r\n    }catch(err){\r\n        _config__WEBPACK_IMPORTED_MODULE_1__.logger.error(err);\r\n    }\r\n}\r\n\r\nconst fetchCompanyStocks = async () => {\r\n    try{\r\n        _config__WEBPACK_IMPORTED_MODULE_1__.logger.info({\r\n            event: 'Service: Request for Company Stocks '\r\n        });\r\n        let { stonkApiUrl, stonkApiHeaders, companies } = _constants__WEBPACK_IMPORTED_MODULE_3__.companyStocksConstants;\r\n        const options = {\r\n            headers: stonkApiHeaders\r\n        };\r\n        const companyStocks = [];\r\n        const urls = companies.map(company => stonkApiUrl + company.key);\r\n        for(let i in urls){\r\n            const response = await (0,_utils__WEBPACK_IMPORTED_MODULE_4__.fetchJsonData)(urls[i], options);\r\n            const data = _utils__WEBPACK_IMPORTED_MODULE_4__.companyStocksParser.getCompanyStockParsedData(response, companies[i])\r\n            companyStocks.push(data);\r\n        }\r\n        _config__WEBPACK_IMPORTED_MODULE_1__.logger.info({\r\n            event: `Service: All company stocks for ${moment__WEBPACK_IMPORTED_MODULE_0___default()().format('L').toString()}`,\r\n            companyStocks\r\n        });\r\n        return companyStocks;\r\n    }catch(err){\r\n        _config__WEBPACK_IMPORTED_MODULE_1__.logger.error(err);\r\n    }\r\n}\n\n//# sourceURL=webpack://milestone1/./src/services/companyStocks.js?");

/***/ }),

/***/ "./src/services/index.js":
/*!*******************************!*\
  !*** ./src/services/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   accidentsService: () => (/* reexport module object */ _accidents__WEBPACK_IMPORTED_MODULE_1__),\n/* harmony export */   airportsService: () => (/* reexport module object */ _airports__WEBPACK_IMPORTED_MODULE_4__),\n/* harmony export */   companyStocksService: () => (/* reexport module object */ _companyStocks__WEBPACK_IMPORTED_MODULE_2__),\n/* harmony export */   newsService: () => (/* reexport module object */ _news__WEBPACK_IMPORTED_MODULE_3__),\n/* harmony export */   registrationsService: () => (/* reexport module object */ _registrations__WEBPACK_IMPORTED_MODULE_0__)\n/* harmony export */ });\n/* harmony import */ var _registrations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registrations */ \"./src/services/registrations.js\");\n/* harmony import */ var _accidents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accidents */ \"./src/services/accidents.js\");\n/* harmony import */ var _companyStocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./companyStocks */ \"./src/services/companyStocks.js\");\n/* harmony import */ var _news__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news */ \"./src/services/news.js\");\n/* harmony import */ var _airports__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./airports */ \"./src/services/airports.js\");\n\r\n\r\n\r\n\r\n \r\n\r\n\n\n//# sourceURL=webpack://milestone1/./src/services/index.js?");

/***/ }),

/***/ "./src/services/news.js":
/*!******************************!*\
  !*** ./src/services/news.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createNews: () => (/* binding */ createNews),\n/* harmony export */   fetchNews: () => (/* binding */ fetchNews),\n/* harmony export */   fetchNewsFromDB: () => (/* binding */ fetchNewsFromDB)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/config/index.js\");\n/* harmony import */ var _db_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db/models */ \"./src/db/models/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ \"./src/constants/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n\r\n\r\n\r\n\r\n\r\nconst createNews = async (data) => {\r\n    try{\r\n        _config__WEBPACK_IMPORTED_MODULE_0__.logger.info({\r\n            event: 'Service: New news',\r\n            data\r\n        });\r\n        const news = await _db_models__WEBPACK_IMPORTED_MODULE_1__.News.insertMany(data, { ordered: false });\r\n        _config__WEBPACK_IMPORTED_MODULE_0__.logger.info({\r\n            event: 'Service: Records added in Mongo DB',\r\n            news\r\n        });\r\n        return news;\r\n    }catch(err){\r\n        if(err.code === 11000){\r\n            _config__WEBPACK_IMPORTED_MODULE_0__.logger.info('Service: Record already exists.');\r\n        }\r\n        _config__WEBPACK_IMPORTED_MODULE_0__.logger.error(err);\r\n    }\r\n}\r\n\r\nconst fetchNewsFromDB = async (records, page) => {\r\n    try{\r\n        const numberOfRecords = records || 10;\r\n        const currentPage = page - 1 || 0;\r\n        _config__WEBPACK_IMPORTED_MODULE_0__.logger.info({\r\n            event: 'Service: New Request News from DB',\r\n            data: {\r\n                numberOfRecords,\r\n                currentPage\r\n            }\r\n        });\r\n        const news = await _db_models__WEBPACK_IMPORTED_MODULE_1__.News.find().skip(numberOfRecords * currentPage).limit(numberOfRecords);\r\n        _config__WEBPACK_IMPORTED_MODULE_0__.logger.info({\r\n            event: 'Service: News from DB',\r\n            news\r\n        });\r\n        return {\r\n            status: 'Success',\r\n            statusCode: 200,\r\n            count: news.length,\r\n            data: news\r\n        };\r\n    }catch(err){\r\n        _config__WEBPACK_IMPORTED_MODULE_0__.logger.error(err);\r\n    }\r\n}\r\n\r\n\r\nconst fetchNews = async () => {\r\n    try{\r\n        _config__WEBPACK_IMPORTED_MODULE_0__.logger.info({\r\n            event: 'Service: Request for News '\r\n        });\r\n        const { newsDataUrl, keywords, requestHeaders, requestLanguage } = _constants__WEBPACK_IMPORTED_MODULE_2__.newsConstants;\r\n        const options = {\r\n            headers: requestHeaders\r\n        };\r\n        const urls = keywords.map(keyword => `${newsDataUrl}?q='${keyword}'&language=${requestLanguage}`);\r\n        const news = [];\r\n        for(let i in urls){\r\n            const response = await (0,_utils__WEBPACK_IMPORTED_MODULE_3__.fetchJsonData)(urls[i], options);\r\n            const data = _utils__WEBPACK_IMPORTED_MODULE_3__.newsParser.getNewsParsedData(response, keywords[i]);\r\n            if(data){\r\n                news.push(data);\r\n            }\r\n        }\r\n        _config__WEBPACK_IMPORTED_MODULE_0__.logger.info({\r\n            event: 'Service: All News',\r\n            news\r\n        });\r\n        return news;\r\n    }catch(err){\r\n        _config__WEBPACK_IMPORTED_MODULE_0__.logger.error(err);\r\n    }\r\n}\n\n//# sourceURL=webpack://milestone1/./src/services/news.js?");

/***/ }),

/***/ "./src/services/registrations.js":
/*!***************************************!*\
  !*** ./src/services/registrations.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createRegistration: () => (/* binding */ createRegistration),\n/* harmony export */   fetchLastPageNumber: () => (/* binding */ fetchLastPageNumber),\n/* harmony export */   fetchRegistrationRecord: () => (/* binding */ fetchRegistrationRecord),\n/* harmony export */   fetchRegistrations: () => (/* binding */ fetchRegistrations),\n/* harmony export */   fetchRegistrationsFromDB: () => (/* binding */ fetchRegistrationsFromDB)\n/* harmony export */ });\n/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cheerio */ \"cheerio\");\n/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cheerio__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./src/config/index.js\");\n/* harmony import */ var _db_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../db/models */ \"./src/db/models/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ \"./src/constants/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst createRegistration = async (data) => {\r\n    try{\r\n        _config__WEBPACK_IMPORTED_MODULE_1__.logger.info({\r\n            event: 'Service: New Registration',\r\n            data\r\n        });\r\n        const registration = await _db_models__WEBPACK_IMPORTED_MODULE_2__.Registrations.create(data);\r\n        _config__WEBPACK_IMPORTED_MODULE_1__.logger.info({\r\n            event: 'Service: Record added in Mongo DB',\r\n            registration\r\n        });\r\n        return registration;\r\n    }catch(err){\r\n        if(err.code === 11000){\r\n            _config__WEBPACK_IMPORTED_MODULE_1__.logger.info('Service: Record already exists.');\r\n        }\r\n        _config__WEBPACK_IMPORTED_MODULE_1__.logger.error(err);\r\n    }\r\n}\r\n\r\nconst fetchRegistrationsFromDB = async (records, page) => {\r\n    try{\r\n        const numberOfRecords = records || 10;\r\n        const currentPage = page - 1 || 0;\r\n        _config__WEBPACK_IMPORTED_MODULE_1__.logger.info({\r\n            event: 'Service: New Request Registrations from DB',\r\n            data: {\r\n                numberOfRecords,\r\n                currentPage\r\n            }\r\n        });\r\n        const registrations = await _db_models__WEBPACK_IMPORTED_MODULE_2__.Registrations.find().skip(numberOfRecords * currentPage).limit(numberOfRecords);\r\n        _config__WEBPACK_IMPORTED_MODULE_1__.logger.info({\r\n            event: 'Service: Registrations from DB',\r\n            registrations\r\n        });\r\n        return {\r\n            status: 'Success',\r\n            statusCode: 200,\r\n            count: registrations.length,\r\n            data: registrations\r\n        };\r\n    }catch(err){\r\n        _config__WEBPACK_IMPORTED_MODULE_1__.logger.error(err);\r\n    }\r\n}\r\n\r\nconst fetchLastPageNumber = async () => {\r\n    try{\r\n        const { home_url, url_headers } = _constants__WEBPACK_IMPORTED_MODULE_3__.registrationsConstants;\r\n        const options = {\r\n            headers: url_headers\r\n        };\r\n        _config__WEBPACK_IMPORTED_MODULE_1__.logger.info({\r\n            event: 'Service: Request for Pagination to Check Page',\r\n            data: {\r\n                url: home_url,\r\n                options\r\n            }\r\n        });\r\n        const html = await (0,_utils__WEBPACK_IMPORTED_MODULE_4__.fetchHtmlContent)(home_url, options);\r\n        const $ = cheerio__WEBPACK_IMPORTED_MODULE_0__.load(html);\r\n        const pagesStr = $('.pagination2center p').text().trim();\r\n        const pageNumber = await _utils__WEBPACK_IMPORTED_MODULE_4__.registrationParser.parseLastPageNumber(pagesStr);\r\n        _config__WEBPACK_IMPORTED_MODULE_1__.logger.info({\r\n            event: 'Service: Last Page Number',\r\n            pageNumber\r\n        });\r\n        return pageNumber;\r\n    }catch(err){\r\n        _config__WEBPACK_IMPORTED_MODULE_1__.logger.error(err);\r\n    }\r\n}\r\n\r\nconst fetchRegistrations = async (pageNumber) => {\r\n    try{\r\n        _config__WEBPACK_IMPORTED_MODULE_1__.logger.info({\r\n            event: 'Service: Request for Registrations for Specific Page',\r\n            pageNumber\r\n        });\r\n        const { home_url, url_headers } = _constants__WEBPACK_IMPORTED_MODULE_3__.registrationsConstants;\r\n        const options = {\r\n            headers: url_headers\r\n        };\r\n        const url = `${home_url}?Sort_Option=5&Page=${pageNumber}`\r\n        _config__WEBPACK_IMPORTED_MODULE_1__.logger.info({\r\n            event: 'Service: Request for Registrations for Specific Page',\r\n            data: {\r\n                url,\r\n                pageNumber,\r\n                options\r\n            }\r\n        });\r\n        const html = await (0,_utils__WEBPACK_IMPORTED_MODULE_4__.fetchHtmlContent)(url, options);\r\n        const registrations = await _utils__WEBPACK_IMPORTED_MODULE_4__.registrationParser.parseAllRegistrations(html);\r\n        _config__WEBPACK_IMPORTED_MODULE_1__.logger.info({\r\n            event: 'Service: All Registrations for Specific Page',\r\n            registrations\r\n        });\r\n        return registrations;\r\n    }catch(err){\r\n        _config__WEBPACK_IMPORTED_MODULE_1__.logger.error(err);\r\n    }\r\n}\r\n\r\nconst fetchRegistrationRecord = async(nNumber) => {\r\n    try{\r\n        const { registration_url, url_headers } = _constants__WEBPACK_IMPORTED_MODULE_3__.registrationsConstants;\r\n        const options = {\r\n            headers: url_headers\r\n        };\r\n        const url = registration_url + nNumber;\r\n        _config__WEBPACK_IMPORTED_MODULE_1__.logger.info({\r\n            event: 'Service: Request for Registration Detail for N-Number',\r\n            data: {\r\n                url,\r\n                nNumber,\r\n                options\r\n            }\r\n        });\r\n        const html = await (0,_utils__WEBPACK_IMPORTED_MODULE_4__.fetchHtmlContent)(url, options);\r\n        const record = await _utils__WEBPACK_IMPORTED_MODULE_4__.registrationParser.parseRegistrationData(nNumber, html);\r\n        _config__WEBPACK_IMPORTED_MODULE_1__.logger.info({\r\n            event: 'Service: Registration Detail for N-Number',\r\n            record\r\n        });\r\n        return record;\r\n    }catch(err){\r\n        _config__WEBPACK_IMPORTED_MODULE_1__.logger.error(err);\r\n    }\r\n}\n\n//# sourceURL=webpack://milestone1/./src/services/registrations.js?");

/***/ }),

/***/ "./src/utils/accidents.js":
/*!********************************!*\
  !*** ./src/utils/accidents.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAccidentsRequestBody: () => (/* binding */ getAccidentsRequestBody),\n/* harmony export */   getFilteredAccidents: () => (/* binding */ getFilteredAccidents),\n/* harmony export */   getFirstDateOfLastMonth: () => (/* binding */ getFirstDateOfLastMonth),\n/* harmony export */   getLastDateOfLastMonth: () => (/* binding */ getLastDateOfLastMonth)\n/* harmony export */ });\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./src/constants/index.js\");\n\r\n\r\n\r\nconst getAccidentsRequestBody = async (sessionId, startingDate, endingDate) => {\r\n    return {\r\n        \"ResultSetSize\": 100,\r\n        \"ResultSetOffset\": 0,\r\n        \"QueryGroups\": [\r\n            {\r\n                \"QueryRules\": [\r\n                    {\r\n                        \"RuleType\": \"Simple\",\r\n                        \"Values\": [\r\n                            `${startingDate}`\r\n                        ],\r\n                        \"Columns\": [\r\n                            \"Event.EventDate\"\r\n                        ],\r\n                        \"Operator\": \"is on or after\",\r\n                        \"overrideColumn\": \"\",\r\n                        \"selectedOption\": {\r\n                            \"FieldName\": \"EventDate\",\r\n                            \"DisplayText\": \"Event date\",\r\n                            \"Columns\": [\r\n                                \"Event.EventDate\"\r\n                            ],\r\n                            \"Selectable\": true,\r\n                            \"InputType\": \"Date\",\r\n                            \"RuleType\": 0,\r\n                            \"Options\": null,\r\n                            \"TargetCollection\": \"cases\",\r\n                            \"UnderDevelopment\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"RuleType\": \"Simple\",\r\n                        \"Values\": [\r\n                            `${endingDate}`\r\n                        ],\r\n                        \"Columns\": [\r\n                            \"Event.EventDate\"\r\n                        ],\r\n                        \"Operator\": \"is on or before\",\r\n                        \"selectedOption\": {\r\n                            \"FieldName\": \"EventDate\",\r\n                            \"DisplayText\": \"Event date\",\r\n                            \"Columns\": [\r\n                                \"Event.EventDate\"\r\n                            ],\r\n                            \"Selectable\": true,\r\n                            \"InputType\": \"Date\",\r\n                            \"RuleType\": 0,\r\n                            \"Options\": null,\r\n                            \"TargetCollection\": \"cases\",\r\n                            \"UnderDevelopment\": true\r\n                        },\r\n                        \"overrideColumn\": \"\"\r\n                    },\r\n                    {\r\n                        \"RuleType\": \"Simple\",\r\n                        \"Values\": [\r\n                            \"Aviation\"\r\n                        ],\r\n                        \"Columns\": [\r\n                            \"Event.Mode\"\r\n                        ],\r\n                        \"Operator\": \"is\",\r\n                        \"selectedOption\": {\r\n                            \"FieldName\": \"Mode\",\r\n                            \"DisplayText\": \"Investigation mode\",\r\n                            \"Columns\": [\r\n                                \"Event.Mode\"\r\n                            ],\r\n                            \"Selectable\": true,\r\n                            \"InputType\": \"Dropdown\",\r\n                            \"RuleType\": 0,\r\n                            \"Options\": null,\r\n                            \"TargetCollection\": \"cases\",\r\n                            \"UnderDevelopment\": true\r\n                        },\r\n                        \"overrideColumn\": \"\"\r\n                    }\r\n                ],\r\n                \"AndOr\": \"and\",\r\n                \"inLastSearch\": false,\r\n                \"editedSinceLastSearch\": false\r\n            }\r\n        ],\r\n        \"AndOr\": \"and\",\r\n        \"SortColumn\": null,\r\n        \"SortDescending\": true,\r\n        \"TargetCollection\": \"cases\",\r\n        \"SessionId\": sessionId\r\n    }\r\n}\r\n\r\nconst parseAccidentData =  (data) => {\r\n    const { dataKeys } = _constants__WEBPACK_IMPORTED_MODULE_1__.accidentsConstants;\r\n    const accident = {};\r\n    dataKeys.forEach(element => {\r\n        accident[element.dbKey] = data.find(event => event.FieldName === element.key).Values[0] || \"\";\r\n    });\r\n    return accident;\r\n}\r\n\r\nconst getFilteredAccidents = data => {\r\n    const { models } = _constants__WEBPACK_IMPORTED_MODULE_1__.registrationsConstants;\r\n    return data.Results.map( (accident) => {\r\n        return parseAccidentData(accident.Fields);\r\n    }).filter(accident => models.includes(accident.model));\r\n}\r\n\r\nconst getFirstDateOfLastMonth = () => {\r\n    return moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, 'months').startOf('month').format('YYYY-MM-DD').toString();\r\n}\r\n\r\nconst getLastDateOfLastMonth = () => {\r\n    return moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, 'months').endOf('month').format('YYYY-MM-DD').toString();\r\n}\n\n//# sourceURL=webpack://milestone1/./src/utils/accidents.js?");

/***/ }),

/***/ "./src/utils/airports.js":
/*!*******************************!*\
  !*** ./src/utils/airports.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatAirportData: () => (/* binding */ formatAirportData)\n/* harmony export */ });\nconst formatAirportData = data => {\r\n    if(!data.icao) return undefined;\r\n    const keys = Object.keys(data);\r\n    let obj = {};\r\n    keys.forEach(key => {\r\n        obj[key] = `${data[key]}` || \"\"\r\n    });\r\n    return obj;\r\n}\n\n//# sourceURL=webpack://milestone1/./src/utils/airports.js?");

/***/ }),

/***/ "./src/utils/companyStocks.js":
/*!************************************!*\
  !*** ./src/utils/companyStocks.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCompanyStockParsedData: () => (/* binding */ getCompanyStockParsedData)\n/* harmony export */ });\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst getCompanyStockParsedData = (data, company) => {\r\n    if(!data) return undefined;\r\n    return {\r\n        companyCode: company.key,\r\n        companyName: company.name,\r\n        date: data.date = moment__WEBPACK_IMPORTED_MODULE_0___default()().format('L').toString(),\r\n        price: data.price,\r\n        changePoint: data.change_point,\r\n        changePercentage: data.change_percentage\r\n    }\r\n}\n\n//# sourceURL=webpack://milestone1/./src/utils/companyStocks.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   accidentsParser: () => (/* reexport module object */ _accidents__WEBPACK_IMPORTED_MODULE_3__),\n/* harmony export */   airportsParser: () => (/* reexport module object */ _airports__WEBPACK_IMPORTED_MODULE_6__),\n/* harmony export */   companyStocksParser: () => (/* reexport module object */ _companyStocks__WEBPACK_IMPORTED_MODULE_4__),\n/* harmony export */   fetchCurrentFormatedDay: () => (/* binding */ fetchCurrentFormatedDay),\n/* harmony export */   fetchHtmlContent: () => (/* binding */ fetchHtmlContent),\n/* harmony export */   fetchJsonData: () => (/* binding */ fetchJsonData),\n/* harmony export */   fetchPreviousFormatedDay: () => (/* binding */ fetchPreviousFormatedDay),\n/* harmony export */   newsParser: () => (/* reexport module object */ _news__WEBPACK_IMPORTED_MODULE_5__),\n/* harmony export */   registrationParser: () => (/* reexport module object */ _registrations__WEBPACK_IMPORTED_MODULE_2__)\n/* harmony export */ });\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _registrations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registrations */ \"./src/utils/registrations.js\");\n/* harmony import */ var _accidents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accidents */ \"./src/utils/accidents.js\");\n/* harmony import */ var _companyStocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./companyStocks */ \"./src/utils/companyStocks.js\");\n/* harmony import */ var _news__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news */ \"./src/utils/news.js\");\n/* harmony import */ var _airports__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./airports */ \"./src/utils/airports.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));\r\n\r\nconst fetchHtmlContent = async (url, options) => {\r\n    const htmlContent = await node_fetch__WEBPACK_IMPORTED_MODULE_1___default()(url, options);\r\n    const content = await htmlContent.text();\r\n    return content;\r\n}\r\n\r\nconst fetchJsonData = async (url, options) => {\r\n    const response = await node_fetch__WEBPACK_IMPORTED_MODULE_1___default()(url, options);\r\n    const data = await response.json();\r\n    return data;\r\n}\r\n\r\nconst fetchCurrentFormatedDay = async () => {\r\n    return moment__WEBPACK_IMPORTED_MODULE_0___default()().format('L').toString();\r\n}\r\n\r\nconst fetchPreviousFormatedDay = async (days) => {\r\n    return moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(days, 'days').format('L').toString();\r\n}\r\n\r\n\n\n//# sourceURL=webpack://milestone1/./src/utils/index.js?");

/***/ }),

/***/ "./src/utils/news.js":
/*!***************************!*\
  !*** ./src/utils/news.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getNewsParsedData: () => (/* binding */ getNewsParsedData)\n/* harmony export */ });\nconst parseArticle = (article, key) => {\r\n    article.sourceName = article.source.name || \"\";\r\n    article.searchKeyword = key;\r\n    delete article.urlToImage;\r\n    delete article.source;\r\n    return article;\r\n}\r\n\r\nconst getNewsParsedData = (data, key) => {\r\n    if(!data.articles) return undefined;\r\n\r\n    const result = data.articles.map(article => {\r\n        return parseArticle(article, key);\r\n    });\r\n    return result;\r\n}\n\n//# sourceURL=webpack://milestone1/./src/utils/news.js?");

/***/ }),

/***/ "./src/utils/registrations.js":
/*!************************************!*\
  !*** ./src/utils/registrations.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchPreviousDayForRegistrations: () => (/* binding */ fetchPreviousDayForRegistrations),\n/* harmony export */   parseAllRegistrations: () => (/* binding */ parseAllRegistrations),\n/* harmony export */   parseLastPageNumber: () => (/* binding */ parseLastPageNumber),\n/* harmony export */   parseRegistrationData: () => (/* binding */ parseRegistrationData)\n/* harmony export */ });\n/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cheerio */ \"cheerio\");\n/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cheerio__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ \"./src/constants/index.js\");\n\r\n\r\n\r\n\r\nconst parseLastPageNumber = async (str) => {\r\n    const pages = str.split(\" \");\r\n    const lastPage = parseInt(pages[pages.length - 1].split(\")\")[0]);\r\n    return lastPage;\r\n}\r\n\r\nconst fetchPreviousDayForRegistrations = async (date) =>{\r\n    return moment__WEBPACK_IMPORTED_MODULE_1___default()(date, 'L').subtract(1, 'days').format('L').toString();\r\n}\r\n\r\nconst parseAllRegistrations = async (htmlContent) =>{\r\n    const { models } = _constants__WEBPACK_IMPORTED_MODULE_2__.registrationsConstants;\r\n    let registrations = [];\r\n    const $ = cheerio__WEBPACK_IMPORTED_MODULE_0__.load(htmlContent);\r\n    $('.devkit-table-row').each((index, element) => {\r\n        if (index !== 0){\r\n            const tds = $(element).find('td');\r\n            const nNumber = $(tds[0]).text().trim();\r\n            const model = $(tds[3]).text().trim();\r\n            const certIssueDate = $(tds[4]).text().trim();\r\n            const row = {\r\n                nNumber,\r\n                model,\r\n                certIssueDate\r\n            };\r\n            registrations.push(row); \r\n        }\r\n    });\r\n    return registrations;\r\n}\r\n\r\nconst parseRegistrationData = async (nNumber, htmlContent) => {\r\n    const $ = cheerio__WEBPACK_IMPORTED_MODULE_0__.load(htmlContent);\r\n    return {\r\n        regNumber: nNumber,\r\n        serialNumber: $('td[data-label=\"Serial Number\"]').first().text().trim() || \"\",\r\n        model: $('td[data-label=\"Model\"]').first().text().trim() || \"\",\r\n        mfrYear: $('td[data-label=\"Mfr Year\"]').first().text().trim() || \"\",\r\n        typeRegistration: $('td[data-label=\"Type Registration\"]').first().text().trim() || \"\",\r\n        status: $('td[data-label=\"Status\"]').first().text().trim() || \"\",\r\n        certificateIssueDate: $('td[data-label=\"Certificate Issue Date\"]').first().text().trim() || \"\",\r\n        typeEngine: $('td[data-label=\"Engine Type\"]').first().text().trim() || \"\",\r\n        modelSCodebase8: $('td[data-label=\"Mode S Code (Base 8 / oct)\"]').first().text().trim() || \"\",\r\n        modelSCodebase16: $('td[data-label=\"Mode S Code (Base 16 / Hex)\"]').first().text().trim() || \"\",\r\n        fractionalOwner: $('td[data-label=\"Fractional Owner\"]').first().text().trim() || \"\",\r\n        registeredOwnerName: $('td[data-label=\"Name\"][colspan=\"3\"]').first().text().trim() || \"\",\r\n        registeredOwnerStreet: $('td[data-label=\"Street\"]').first().text().trim() || \"\",\r\n        registeredOwnerCity: $('td[data-label=\"City\"]').first().text().trim() || \"\",\r\n        registeredOwnerState: $('td[data-label=\"State\"]').first().text().trim() || \"\",\r\n        registeredOwnerZipCode: $('td[data-label=\"Zip Code\"]').first().text().trim() || \"\",\r\n        registeredOwnerCountry: $('td[data-label=\"Country\"]').first().text().trim() || \"\",\r\n        engineManufacturer: $('td[data-label=\"Engine Manufacturer\"]').first().text().trim() || \"\",\r\n        engineModel: $('td[data-label=\"Engine Model\"]').first().text().trim() || \"\",\r\n        awDate: $('td[data-label=\"A/W Date\"]').first().text().trim() || \"\"\r\n    }\r\n}\n\n//# sourceURL=webpack://milestone1/./src/utils/registrations.js?");

/***/ }),

/***/ "cheerio":
/*!**************************!*\
  !*** external "cheerio" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("cheerio");

/***/ }),

/***/ "convert-excel-to-json":
/*!****************************************!*\
  !*** external "convert-excel-to-json" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("convert-excel-to-json");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("dotenv/config");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "node-cron":
/*!****************************!*\
  !*** external "node-cron" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node-cron");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("node-fetch");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("winston");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;