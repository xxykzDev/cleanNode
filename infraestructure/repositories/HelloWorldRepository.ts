import { IHelloWorldRepository } from '../../aplication/interfaces/IHelloWorldRepository';

export class HelloWorldRepository implements IHelloWorldRepository {
  public getHelloWorldMessage(): string {
    // Here you can add logic to retrieve data from a database or any other source.
    return 'Hello World';
  }
}
