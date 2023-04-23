"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _http = _interopRequireDefault(require("http"));
var server = _http["default"].createServer(function (req, res) {
  res.end('Hello from the server');
}).listen(4001);
console.log('Server is up and running');
var _default = server;
exports["default"] = _default;
