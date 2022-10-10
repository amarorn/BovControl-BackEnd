"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("../config/routes");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
(0, routes_1.setupRoutes)(app);
exports.default = app;
