"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerService = void 0;
const tsyringe_1 = require("tsyringe");
const winston_1 = __importDefault(require("winston"));
let LoggerService = class LoggerService {
    constructor() {
        this.logger = {
            infoLog: winston_1.default.createLogger({
                level: 'info',
                format: winston_1.default.format.combine(winston_1.default.format.colorize({ all: true }), winston_1.default.format.label({
                    label: `Go! 🏷️🌍🐳🛢`,
                }), winston_1.default.format.timestamp({
                    format: 'MMM-DD-YYYY HH:mm:ss',
                }), winston_1.default.format.printf((info) => `${info.level}: ${info.label}: ${[info.timestamp]}: ${info.message}`)),
                transports: [new winston_1.default.transports.Console()],
            }),
            errorLog: winston_1.default.createLogger({
                level: 'error',
                format: winston_1.default.format.combine(winston_1.default.format.colorize({ all: true }), winston_1.default.format.label({
                    label: `Go! 🏷️🌍🐳🛢`,
                }), winston_1.default.format.timestamp({
                    format: 'MMM-DD-YYYY HH:mm:ss',
                }), winston_1.default.format.printf((error) => `${error.level}: ${error.label}: ${[error.timestamp]}: ${error.message}`)),
                transports: [new winston_1.default.transports.Console()],
            }),
            debugLog: winston_1.default.createLogger({
                level: 'debug',
                format: winston_1.default.format.combine(winston_1.default.format.colorize({ all: true }), winston_1.default.format.label({
                    label: `Go! 🏷️🌍🐳🛢`,
                }), winston_1.default.format.timestamp({
                    format: 'MMM-DD-YYYY HH:mm:ss',
                }), winston_1.default.format.printf((debug) => `${debug.level}: ${debug.label}: ${[debug.timestamp]}: ${debug.message}`)),
                transports: [new winston_1.default.transports.Console()],
            }),
        };
    }
    log(data) {
        return this.logger.infoLog.info(`${data}`);
    }
    error(data) {
        return this.logger.errorLog.error(`${data}`);
    }
    debug(data) {
        return this.logger.debugLog.debug(`${data}`);
    }
};
LoggerService = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [])
], LoggerService);
exports.LoggerService = LoggerService;
