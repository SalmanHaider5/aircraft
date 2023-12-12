import express from 'express';
import { airportsController } from '../controllers';

const airportsRouter = express.Router();

airportsRouter.route('/').get(airportsController.getAirports);
airportsRouter.route('/create').post(airportsController.createAirportsByFile);

export default airportsRouter;