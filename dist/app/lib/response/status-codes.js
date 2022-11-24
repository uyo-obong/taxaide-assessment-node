"use strict";
/**
 * Response Status Code Types
 */
Object.defineProperty(exports, "__esModule", { value: true });
const StatusCodes = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    INTERNAL_SERVER_ERROR: 500,
    BAD_GATEWAY: 502,
    UNPROCESSABLE_ENTITY: 422,
};
exports.default = StatusCodes;
