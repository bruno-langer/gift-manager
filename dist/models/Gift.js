"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ModelSchema = new mongoose_1.Schema({ url: String, siteName: String, value: String });
exports.default = mongoose_1.model('Gifts', new mongoose_1.Schema({
    shortName: {
        type: String,
        required: true
    },
    longName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    models: {
        type: [ModelSchema],
        required: true,
    },
    guestId: {
        type: String,
        required: true
    },
}));
