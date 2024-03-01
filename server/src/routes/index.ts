import express, { Express, Request, Response, Router } from 'express';

import userRoutes from './userRoutes';

const router: Router = express.Router();

router.use('/user', userRoutes);

export default router;
