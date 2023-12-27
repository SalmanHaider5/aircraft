import express from 'express';
import { airportsController } from '../controllers';
import { fileUploads } from '../middlewares';

const airportsRouter = express.Router();

airportsRouter.route('/').get(airportsController.getAirports);
airportsRouter.route('/create').post(fileUploads.airportsUploadFile.single("file"), airportsController.createAirportsByFile);

export default airportsRouter;