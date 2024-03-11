import { Request, Response } from 'express';
import { IHelloWorldUseCase } from '../../aplication/interfaces/IHelloWorldUseCase';
import { IHelloWorldController } from '../interfaces/IHelloWorldController';

export class HelloWorldController implements IHelloWorldController {
  constructor(private useCase: IHelloWorldUseCase) {}

  public hello(req: Request, res: Response): Response {
    const greeting = this.useCase.execute();
    return res.send(greeting);
  }
}
