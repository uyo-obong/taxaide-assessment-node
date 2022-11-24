"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const types_1 = require("./types");
exports.default = (_req, res, next) => {
    const responseTypes = {
        ok: types_1.ok,
        created: types_1.created,
        badRequest: types_1.badRequest,
        unauthorized: types_1.unauthorized,
        forbidden: types_1.forbidden,
        notFound: types_1.notFound,
        serverError: types_1.serverError,
        badGateway: types_1.badGateway,
    };
    lodash_1.default.extend(res, responseTypes);
    next();
};
