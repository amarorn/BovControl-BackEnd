"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverError = exports.ok = void 0;
const ok = (data) => ({
    statusCode: 500,
    data
});
exports.ok = ok;
const serverError = (error) => ({
    statusCode: 500,
    data: error.stack
});
exports.serverError = serverError;
