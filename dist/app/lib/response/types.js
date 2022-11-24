"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.badGateway = exports.serverError = exports.notFound = exports.forbidden = exports.unauthorized = exports.badRequest = exports.created = exports.ok = void 0;
const logger_service_1 = require("../../services/logger.service");
const response_messages_1 = __importDefault(require("../response-messages"));
const status_codes_1 = __importDefault(require("./status-codes"));
const logger = new logger_service_1.LoggerService();
function ok(data = null, message = null) {
    logger.log(`${message}, ${JSON.stringify(data)}`);
    this.status(status_codes_1.default.OK).json({
        status: response_messages_1.default.STATUS_SUCCESS,
        data,
        message,
    });
}
exports.ok = ok;
function created(data = null, message = response_messages_1.default.DATA_CREATED) {
    logger.log(`${message}, ${JSON.stringify(data)}`);
    this.status(status_codes_1.default.CREATED).json({
        status: response_messages_1.default.STATUS_SUCCESS,
        data,
        message,
    });
}
exports.created = created;
function badRequest(data = null, message = response_messages_1.default.BAD_REQUEST) {
    logger.error(`${message}, ${JSON.stringify(data)}`);
    this.status(status_codes_1.default.BAD_REQUEST).json({
        status: response_messages_1.default.STATUS_ERROR,
        message,
        data: null,
    });
}
exports.badRequest = badRequest;
function unauthorized(data = null, message = response_messages_1.default.UNAUTHORIZED) {
    logger.error(`${message}, ${data}`);
    this.status(status_codes_1.default.UNAUTHORIZED).json({
        status: response_messages_1.default.STATUS_ERROR,
        message,
    });
}
exports.unauthorized = unauthorized;
function forbidden(data = null, message = response_messages_1.default.FORBIDDEN) {
    this.status(status_codes_1.default.FORBIDDEN).json('forbidden');
}
exports.forbidden = forbidden;
function notFound(data = null, message = response_messages_1.default.NOT_FOUND) {
    this.status(status_codes_1.default.NOT_FOUND).json('notFound');
}
exports.notFound = notFound;
function serverError(data = null, message = response_messages_1.default.ERROR_OCURRED) {
    logger.error(data);
    this.status(status_codes_1.default.INTERNAL_SERVER_ERROR).json({
        status: response_messages_1.default.STATUS_ERROR,
        message,
    });
}
exports.serverError = serverError;
function badGateway(data = null, message = response_messages_1.default.BAD_GATEWAY) {
    logger.error(`${message}, ${JSON.stringify(data)}`);
    this.status(status_codes_1.default.BAD_GATEWAY).json({
        status: response_messages_1.default.STATUS_ERROR,
        message,
    });
}
exports.badGateway = badGateway;
