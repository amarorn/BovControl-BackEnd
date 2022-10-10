"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const factories_1 = require("../factories");
const adapters_1 = require("../adapters");
exports.default = (router) => {
    router.post("/famer", (0, adapters_1.adaptRoute)((0, factories_1.makeCreateFamerController)()));
};
