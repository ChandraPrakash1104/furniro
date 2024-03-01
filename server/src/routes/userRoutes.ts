import express, { Express, Request, Response, Router } from 'express';
import { z } from 'zod';

import controllers from '../controllers/user/userController';

const router: Router = express.Router();

const userSchema = z.object({
  id: z.number(),
  username: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  password: z.string(),
  email: z.string(),
  address: z.string(),
  phone_number: z.string(),
});

router.get('/', (req: Request, res: Response) => {
  res.send('welcome user');
});

router.post('/login', controllers.login);
router.post('/register', controllers.register);

export default router;
