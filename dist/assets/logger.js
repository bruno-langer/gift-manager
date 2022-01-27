"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = exports.log = void 0;
var environments = {
    index: { consoleLog: true },
    logger_main: { consoleLog: true },
    logger_error: { consoleLog: true },
    server_main: { consoleLog: true },
    server_requests: { consoleLog: true },
    database_connection: { consoleLog: true },
};
var colors = [
    '\x1b[32m',
    '\x1b[33m',
    '\x1b[34m',
    '\x1b[35m',
    '\x1b[36m',
    '\x1b[31m\x1b[1m',
    '\x1b[32m\x1b[1m',
    '\x1b[33m\x1b[1m',
    '\x1b[34m\x1b[1m',
    '\x1b[35m\x1b[1m',
    '\x1b[36m\x1b[1m',
];
var colorInd = 0;
function log(data, source) {
    var conf = environments[source];
    var date = new Date();
    var now = (date.toLocaleTimeString() + "." + date.getMilliseconds().toString().padStart(3, '0')).padStart(12, ' ');
    if (!conf) {
        consoleLog('logger_main', now, "Fonte " + source + " n\u00E3o identificada: " + data, true, { color: '\x1b[37m' });
        return;
    }
    if (conf.consoleLog) {
        consoleLog(source, now, data, false, conf);
    }
}
exports.log = log;
function error(data, source) {
    var conf = environments[source];
    var date = new Date();
    var now = (date.toLocaleTimeString() + "." + date.getMilliseconds().toString().padStart(3, '0')).padStart(12, ' ');
    if (!conf) {
        consoleLog('logger_error', now, "Fonte " + source + " n\u00E3o identificada: " + data, true, { color: '\x1b[30m' });
        return;
    }
    if (conf.consoleLog) {
        consoleLog(source, now, data, true, conf);
    }
}
exports.error = error;
function consoleLog(source, timestampString, data, isError, conf) {
    var clearColor = '\x1b[0m';
    var errorColor = '\x1b[41m\x1b[1;33m';
    var formattedSource = source.padStart(20, ' ');
    if (!conf.color)
        newColor(source);
    var confColor = conf.color;
    var type = isError ? errorColor + "Erro: " + clearColor : confColor + " Log: ";
    console.log(type, confColor, formattedSource, '-', timestampString, '-', clearColor, data);
}
function newColor(source) {
    if (!colors[colorInd])
        colorInd = 0;
    environments[source].color = colors[colorInd];
    colorInd++;
}
