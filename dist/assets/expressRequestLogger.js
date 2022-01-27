"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestLogger = void 0;
var logger_1 = require("./logger");
function requestLogger(request, _response, next) {
    logger_1.log("Request on " + request.url, 'server_requests');
    next();
}
exports.requestLogger = requestLogger;
