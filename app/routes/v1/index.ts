import express, { Router } from 'express';
import TodoRouter from './todo';

const AppRouter: Router = express.Router();

AppRouter.use('/todo', TodoRouter);

export default AppRouter;
