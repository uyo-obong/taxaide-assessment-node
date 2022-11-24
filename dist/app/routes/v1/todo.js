"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tsyringe_1 = require("tsyringe");
const todo_controller_1 = __importDefault(require("../../controller/todo.controller"));
const todo_validator_1 = __importDefault(require("../../validator/todo.validator"));
const auth_middleware_1 = __importDefault(require("../../middleware/auth.middleware"));
const TodoEntityRouter = express_1.default.Router();
const TodoEntityController = tsyringe_1.container.resolve(todo_controller_1.default);
const todoValidator = tsyringe_1.container.resolve(todo_validator_1.default);
TodoEntityRouter.get('/fetch', auth_middleware_1.default, TodoEntityController.fetchTodos);
TodoEntityRouter.get('/fetch/:id', auth_middleware_1.default, TodoEntityController.fetchSingleTodos);
TodoEntityRouter.post('/create', auth_middleware_1.default, todoValidator.todo, TodoEntityController.createTodo);
TodoEntityRouter.patch('/update/:id', auth_middleware_1.default, TodoEntityController.updateTodo);
TodoEntityRouter.delete('/delete/:id', auth_middleware_1.default, TodoEntityController.deleteTodo);
exports.default = TodoEntityRouter;
