import express from 'express';
import registrationsRouter from './registrations';

const router = express.Router();

router.use('/registrations', registrationsRouter);

export default router;