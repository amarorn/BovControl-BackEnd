"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adaptRoute = void 0;
const adaptRoute = (controller) => {
    return async (req, res) => {
        const httpResponse = await controller.handle();
        res.status(httpResponse.statusCode).json(httpResponse.data);
    };
};
exports.adaptRoute = adaptRoute;
