import express from 'express';
import registrationsRouter from './registrations';
import accidentsRouter from './accidents';

const router = express.Router();

router.use('/registrations', registrationsRouter);
router.use('/accidents', accidentsRouter);

export default router;