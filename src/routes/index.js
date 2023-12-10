import express from 'express';
import accidentsRouter from './accidents';
import registrationsRouter from './registrations';
import stocksRouter from './companyStocks';

const router = express.Router();

router.use('/accidents', accidentsRouter);
router.use('/registrations', registrationsRouter);
router.use('/stocks', stocksRouter);

export default router;