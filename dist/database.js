"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var endpoints_config_1 = __importDefault(require("./endpoints.config"));
var logger_1 = require("./assets/logger");
mongoose_1.connect(endpoints_config_1.default.mongoUrl);
mongoose_1.connection.on('error', function (err) { return logger_1.error(err, 'database_connection'); });
mongoose_1.connection.on('connecting', function () { return logger_1.log('Connecting to the database', 'database_connection'); });
mongoose_1.connection.on('connected', function () { return logger_1.log('Connected to the database', 'database_connection'); });
