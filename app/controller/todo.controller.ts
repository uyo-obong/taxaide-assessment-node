import { injectable } from 'tsyringe';
import { IRequest, IResponse } from '../interfaces/http.interface';
import { TodoService } from '../services/todo.service';

@injectable()
class TodoController {
  constructor(private todoService: TodoService) {}


  fetchTodos = async (req: IRequest, res: IResponse) => {
    await this.todoService.fetchTodos(req, res);
  };

  fetchSingleTodos = async (req: IRequest, res: IResponse) => {
    await this.todoService.fetchSingleTodos(req, res);
  };

  createTodo = async (req: IRequest, res: IResponse) => {
    await this.todoService.createTodo(req, res);
  };

  updateTodo = async (req: IRequest, res: IResponse) => {
    await this.todoService.updateTodo(req, res);
  };

  deleteTodo = async (req: IRequest, res: IResponse) => {
    await this.todoService.deleteTodo(req, res);
  };
}

export default TodoController;
