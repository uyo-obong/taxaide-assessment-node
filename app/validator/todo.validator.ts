import { injectable } from 'tsyringe';
import { checkSchema } from 'express-validator';
import validate from '../lib/validate';

@injectable()
class TodoValidator {
  todo = validate(
    checkSchema({
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
    })
  );
}

export default TodoValidator;
