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
exports.TodoService = void 0;
const tsyringe_1 = require("tsyringe");
const logger_service_1 = require("./logger.service");
const todo_schema_1 = __importDefault(require("../models/todo-schema"));
let TodoService = class TodoService {
    constructor(logger) {
        this.logger = logger;
        this.fetchTodos = (req, res) => __awaiter(this, void 0, void 0, function* () {
            this.logger.log('hi');
            const todo = yield todo_schema_1.default.find();
            return res.ok(todo, 'Success');
        });
        this.fetchSingleTodos = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const todo = yield todo_schema_1.default.find({ _id: req.params.id });
            return res.ok(todo, 'Success');
        });
        /**
         *
         * @param req
         * @param res
         */
        this.createTodo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            this.logger.log('saving todo...');
            try {
                const request = req.body;
                const todo = yield todo_schema_1.default.create(request);
                return res.created(todo, 'Todo has been saved!');
            }
            catch (e) {
                return res.badRequest(e.message);
            }
        });
        /**
         *
         * @param req
         * @param res
         */
        this.updateTodo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            this.logger.log('updated ...');
            try {
                const todo = yield todo_schema_1.default.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
                return res.ok(todo, 'Updated!');
            }
            catch (e) {
                return res.badRequest(e.message);
            }
        });
        /**
         * The method handle tod deletion
         * @param req
         * @param res
         */
        this.deleteTodo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            this.logger.log('deleting...');
            const todo = yield todo_schema_1.default.findOneAndRemove({ _id: req.params.id });
            return res.ok({}, 'Todo has been deleted!');
        });
    }
};
TodoService = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [logger_service_1.LoggerService])
], TodoService);
exports.TodoService = TodoService;
