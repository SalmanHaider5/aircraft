import express from 'express';
import { registrationsController } from '../controllers';

const registrationsRouter = express.Router();

registrationsRouter.route('/').get(registrationsController.getRegistrations);

export default registrationsRouter;