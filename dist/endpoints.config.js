"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    mongoUrl: (_a = process.env["MONGO_URL"]) !== null && _a !== void 0 ? _a : "",
    serverPort: (_b = process.env["PORT"]) !== null && _b !== void 0 ? _b : 80
};
