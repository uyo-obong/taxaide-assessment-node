"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const express_validator_1 = require("express-validator");
const validate_1 = __importDefault(require("../lib/validate"));
let TodoValidator = class TodoValidator {
    constructor() {
        this.todo = (0, validate_1.default)((0, express_validator_1.checkSchema)({
            posted_by: {
                in: ['body'],
                isString: {
                    errorMessage: 'Posted_by is required',
                },
                trim: true,
            },
            email: {
                in: ['body'],
                notEmpty: {
                    errorMessage: 'email is required',
                },
                isEmail: {
                    errorMessage: 'Email is should be valid',
                },
                trim: true,
            },
            title: {
                in: ['body'],
                notEmpty: {
                    errorMessage: 'Title is required',
                },
                trim: true,
            },
            description: {
                in: ['body'],
                isString: {
                    errorMessage: 'Description must be a url',
                },
                trim: true,
                optional: true,
            },
        }));
    }
};
TodoValidator = __decorate([
    (0, tsyringe_1.injectable)()
], TodoValidator);
exports.default = TodoValidator;
