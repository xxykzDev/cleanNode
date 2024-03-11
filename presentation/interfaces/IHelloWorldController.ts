import { Request, Response } from 'express';

export interface IHelloWorldController {
  hello(req: Request, res: Response): Response;
}