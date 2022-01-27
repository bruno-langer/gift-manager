"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importStar(require("express"));
var http_1 = require("http");
var cors_1 = __importDefault(require("cors"));
var logger_1 = require("./assets/logger");
var expressRequestLogger_1 = require("./assets/expressRequestLogger");
var root_1 = require("./routes/root");
var guests_1 = require("./routes/guests");
var gifts_1 = require("./routes/gifts");
var endpoints_config_1 = __importDefault(require("./endpoints.config"));
var server = express_1.default();
var http = http_1.createServer(server);
server.use(cors_1.default());
server.use(express_1.json());
server.use(expressRequestLogger_1.requestLogger);
server.use('/', root_1.root);
server.use('/guests', guests_1.guests);
server.use('/gifts', gifts_1.gifts);
http.listen(endpoints_config_1.default.serverPort);
logger_1.log("Server available at port " + endpoints_config_1.default.serverPort, 'server_main');
