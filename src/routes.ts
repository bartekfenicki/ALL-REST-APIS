import { Router, Request, Response } from 'express';
import { loginUser, registerUser } from './controllers/authController';

const router: Router = Router();

/**
 * @swagger
 * /:
 *   get:
 *     tags:
 *       - App Routes
 *     summary: Health check
 *     description: Basic route to check if the api is running
 *     responses:
 *       200:
 *         description: Server up and running.
 */
router.get('/', (req: Request, res: Response) => {
  res.status(200).send({ message: 'Welcome to the TypeScript MEN REST-API' });
})

// auth
/**
* @swagger
* /user/register:
*   post:
*     tags:
*       - User Routes
*     summary: Register a new user
*     description: Takes a user in the body and tries to register it in the database
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: "#/components/schemas/User"
*     responses:
*       201:
*         description: User created succesfully
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 error:
*                   type: string
*                 _id:
*                   type: string
*/
router.post('/user/register', registerUser);

/**
* @swagger
* /user/login:
*   post:
*     tags:
*       - User Routes
*     summary: Login an existing user
*     description: Logs in an existing user
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               email:
*                 type: string
*               password:
*                 type: string
*     responses:
*       200:
*         description: User logged in succesfully
*         content:
*           application/json:
*             schema:
*             type: object
*             properties:
*               email:
*                 type: string
*               password:
*                 type: string
*/
router.post('/user/login', loginUser);


export default router