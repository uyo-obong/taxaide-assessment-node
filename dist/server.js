"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./app/config/config"));
const routes_1 = __importDefault(require("./app/routes"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const response_1 = __importDefault(require("./app/lib/response"));
const tsyringe_1 = require("tsyringe");
const logger_service_1 = require("./app/services/logger.service");
const status_codes_1 = __importDefault(require("./app/lib/response/status-codes"));
const logger = tsyringe_1.container.resolve(logger_service_1.LoggerService);
class Server {
    constructor() {
        this.app = (0, express_1.default)();
    }
    mongooseConnection() {
        mongoose_1.default
            .connect(config_1.default.mongo.uri)
            .then(() => logger.log('Database Connected'))
            .catch((err) => {
            logger.error(err);
        });
        mongoose_1.default.connection.on('error', (err) => {
            logger.error(`DB connection error: ${err.message}`);
        });
    }
    configuration() {
        this.mongooseConnection();
        this.app.use(response_1.default);
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.get('/', (req, res) => {
            res.status(status_codes_1.default.OK).json('starting...');
        });
        // Mount routes
        (0, routes_1.default)(this.app);
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            const PORT = config_1.default.web.port;
            this.configuration();
            this.app.listen(PORT, () => {
                logger.log(`Server is listening on port ${PORT}.`);
            });
        });
    }
}
const server = new Server();
server.start();
