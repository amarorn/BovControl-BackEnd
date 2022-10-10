"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFamerController = void 0;
const contracts_1 = require("../contracts");
class CreateFamerController {
    constructor(createFamer) {
        this.createFamer = createFamer;
    }
    async handle() {
        try {
            const response = await this.createFamer.create();
            return (0, contracts_1.ok)(response);
        }
        catch (error) {
            return (0, contracts_1.serverError)(error);
        }
    }
}
exports.CreateFamerController = CreateFamerController;
