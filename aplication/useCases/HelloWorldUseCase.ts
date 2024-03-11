import { IHelloWorldUseCase } from '../interfaces/IHelloWorldUseCase';
import { IHelloWorldRepository } from '../interfaces/IHelloWorldRepository';

export class HelloWorldUseCase implements IHelloWorldUseCase {
  constructor(private helloWorldRepository: IHelloWorldRepository) {}

  public execute(): string {
    return this.helloWorldRepository.getHelloWorldMessage();
  }
}