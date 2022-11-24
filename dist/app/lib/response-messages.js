"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
let ResponseMessages = class ResponseMessages {
};
ResponseMessages.STATUS_SUCCESS = 'success';
ResponseMessages.STATUS_ERROR = 'error';
ResponseMessages.STATUS_FAILED = 'failed';
ResponseMessages.BAD_REQUEST = 'BAD-REQUEST';
ResponseMessages.ERROR_OCURRED = 'AN-ERROR-OCURRED';
ResponseMessages.BAD_GATEWAY = 'BAD-GATEWAY';
ResponseMessages.NOT_FOUND = 'NOT-FOUND';
ResponseMessages.UNAUTHORIZED = 'UNAUTHORIZED-ACCESS';
ResponseMessages.FORBIDDEN = 'FORBIDDEN';
ResponseMessages.DATA_CREATED = 'DATA-CREATED';
ResponseMessages = __decorate([
    (0, tsyringe_1.injectable)()
], ResponseMessages);
exports.default = ResponseMessages;
