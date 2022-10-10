"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateFamerController = void 0;
const service_1 = require("../../aplication/service");
const controllers_1 = require("../../Presentation/controllers");
const repository_1 = require("../../Infra/mongodb/repository");
const makeCreateFamerController = () => {
    const repo = new repository_1.MongoFamerRepository();
    const service = new service_1.CreateFamerService(repo);
    return new controllers_1.CreateFamerController(service);
};
exports.makeCreateFamerController = makeCreateFamerController;
