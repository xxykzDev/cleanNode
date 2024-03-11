import { Router } from 'express';
import { HelloWorldUseCase } from '../../aplication/useCases/HelloWorldUseCase';
import { HelloWorldController } from '../controllers/HelloWorldController';
import { HelloWorldRepository } from '../../infraestructure/repositories/HelloWorldRepository';

const router = Router();

// Create an instance of the repository
const helloWorldRepository = new HelloWorldRepository();
// Now pass the repository instance to the use case
const helloWorldUseCase = new HelloWorldUseCase(helloWorldRepository);
// And then pass the use case instance to the controller
const helloWorldController = new HelloWorldController(helloWorldUseCase);
/**
 * @openapi
 * /api/hello:
 *   get:
 *     summary: Returns a hello world message
 *     responses:
 *       200:
 *         description: A hello world message
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HelloWorldResponse'
 */
router.get('/hello', (req, res) => helloWorldController.hello(req, res));

export default router;
