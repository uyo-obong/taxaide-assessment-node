import { injectable } from 'tsyringe';
import { LoggerService } from './logger.service';
import { IRequest, IResponse } from '../interfaces/http.interface';
import TodoSchema from '../models/todo-schema';

@injectable()
export class TodoService {
  constructor(private logger: LoggerService) {
  }

  public fetchTodos = async (req: IRequest, res: IResponse) => {
    this.logger.log('hi');
    const todo = await TodoSchema.find();
    return res.ok(todo, 'Success');
  };

  /**
   *
   * @param req
   * @param res
   */
  public createTodo = async (req: IRequest, res: IResponse) => {
    this.logger.log('saving todo...');

    try {
      const request = req.body;
      const todo = await TodoSchema.create(request);
      return res.created(todo, 'Todo has been saved!');
    } catch (e) {
      return res.badRequest(e.message);
    }
  };

  /**
   *
   * @param req
   * @param res
   */
  public updateTodo = async (req: IRequest, res: IResponse) => {
    this.logger.log('updated ...');

    try {
      const todo = await TodoSchema.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
      return res.ok(todo, 'Updated!');
    } catch (e) {
      return res.badRequest(e.message);
    }
  };

  /**
   * The method handle tod deletion
   * @param req
   * @param res
   */
  public deleteTodo = async (req: IRequest, res: IResponse) => {
    this.logger.log('deleting...');

    const todo = await TodoSchema.findOneAndRemove({ _id: req.params.id })
    return res.ok({}, 'Todo has been deleted!')
  };
}
