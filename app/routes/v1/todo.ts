import express, { Router } from 'express';
import { container } from 'tsyringe';
import TodoController from '../../controller/todo.controller';
import TodoValidator from '../../validator/todo.validator';
import authMiddleware from '../../middleware/auth.middleware';

const TodoEntityRouter: Router = express.Router();
const TodoEntityController: any = container.resolve(TodoController);
const todoValidator: any = container.resolve(TodoValidator);

TodoEntityRouter.get('/fetch', authMiddleware, TodoEntityController.fetchTodos);
TodoEntityRouter.get('/fetch/:id', authMiddleware, TodoEntityController.fetchSingleTodos);
TodoEntityRouter.post('/create', authMiddleware, todoValidator.todo, TodoEntityController.createTodo);
TodoEntityRouter.patch('/update/:id', authMiddleware, TodoEntityController.updateTodo);
TodoEntityRouter.delete('/delete/:id', authMiddleware, TodoEntityController.deleteTodo);

export default TodoEntityRouter;
