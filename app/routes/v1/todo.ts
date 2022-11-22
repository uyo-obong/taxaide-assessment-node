import express, { Router } from 'express';
import { container } from 'tsyringe';
import TodoController from '../../controller/todo.controller';
import TodoValidator from '../../validator/todo.validator';

const TodoEntityRouter: Router = express.Router();
const TodoEntityController: any = container.resolve(TodoController);
const todoValidator: any = container.resolve(TodoValidator);

TodoEntityRouter.get('/fetch', TodoEntityController.fetchTodos);
TodoEntityRouter.post('/create', todoValidator.todo, TodoEntityController.createTodo);
TodoEntityRouter.patch('/update/:id', TodoEntityController.updateTodo);
TodoEntityRouter.delete('/delete/:id', TodoEntityController.deleteTodo);

export default TodoEntityRouter;
