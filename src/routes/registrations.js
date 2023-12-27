import express from 'express';
import { fileUploads } from '../middlewares';
import { registrationsController } from '../controllers';

const registrationsRouter = express.Router();

registrationsRouter.route('/').get(registrationsController.getRegistrations);
registrationsRouter.route('/create').post(fileUploads.registrationsUploadFile.single("file"), registrationsController.createRegistationsByFile);

export default registrationsRouter;