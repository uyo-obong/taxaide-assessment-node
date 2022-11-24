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
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const todo_service_1 = require("../services/todo.service");
let TodoController = class TodoController {
    constructor(todoService) {
        this.todoService = todoService;
        this.fetchTodos = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield this.todoService.fetchTodos(req, res);
        });
        this.fetchSingleTodos = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield this.todoService.fetchSingleTodos(req, res);
        });
        this.createTodo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield this.todoService.createTodo(req, res);
        });
        this.updateTodo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield this.todoService.updateTodo(req, res);
        });
        this.deleteTodo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield this.todoService.deleteTodo(req, res);
        });
    }
};
TodoController = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoController);
exports.default = TodoController;
