import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { Application } from 'express';

/**
 * Setup Swagger documentation
 * @param app 
 */
export function setupDocs(app: Application) {

  // swagger definition
  const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'Football API',
      version: '1.0.0',
      description: 'MongoDB Express Node TypeScript REST API',
    },
    servers: [
      {
        url: 'http://localhost:4000/api/',
        description: 'Local development server',
      },
      {
        url: 'https://ments-api-kex4.onrender.com/api/',
        description: 'Remote development server',
      }
    ],
    components: {
      securitySchemes: {
        ApiKeyAuth: {
          type: 'apiKey',
          in: 'header',
          name: 'auth-token',
        },
      },
      schemas: {
        User: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            firstName: { type: 'string' },
            lastName: { type: 'string' },
            username: { type: 'string' },
            email: { type: 'string' },
            password: { type: 'string' },
            profileIcon: {type: 'string'},
            country: {type: 'string'},
            favClub: {type: 'string'},
            registerDate: { type: 'string' },
          },
        },
      },
    }
  }

  // swagger options
  const options = {
    swaggerDefinition,
    // Path to the files containing OpenAPI definitions
    apis: ['**/*.ts']
  }

  // swagger spec
  const swaggerSpec = swaggerJSDoc(options);

  // create docs route
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}