// swagger.ts

import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import express from 'express';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'This is a simple CRUD API application made with Express and documented with Swagger',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
    components: {
      schemas: {
        HelloWorldResponse: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              example: 'Hello World',
            },
          },
        },
        // Define other schemas here if necessary
      },
    },
  },
  apis: ['./src/presentation/routes/*.ts'], // Ensure this matches the actual file paths
};

const swaggerSpec = swaggerJSDoc(options);

export function setupSwagger(app: express.Application): void {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
