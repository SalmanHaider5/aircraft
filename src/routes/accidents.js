import express from 'express';
import { accidentsController } from '../controllers';

const accidentsRouter = express.Router();

accidentsRouter.route('/').get(accidentsController.getAccidents);

export default accidentsRouter;