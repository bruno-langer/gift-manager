"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guests = void 0;
var express_1 = require("express");
var guests = express_1.Router();
exports.guests = guests;
guests.get('/', function (request, response) {
    response.send({ url: request.url });
});
