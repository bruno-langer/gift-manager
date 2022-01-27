"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.root = void 0;
var express_1 = require("express");
var root = express_1.Router();
exports.root = root;
root.get('/', function (request, response) {
    response.send({ url: request.url });
});
