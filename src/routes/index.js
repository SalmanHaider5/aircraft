import express from 'express';
import accidentsRouter from './accidents';
import registrationsRouter from './registrations';
import stocksRouter from './companyStocks';
import newsRouter from './news';

const router = express.Router();

router.use('/accidents', accidentsRouter);
router.use('/registrations', registrationsRouter);
router.use('/stocks', stocksRouter);
router.use('/news', newsRouter);

export default router;