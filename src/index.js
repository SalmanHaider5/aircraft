import express from 'express';
import cors from "cors";
import { config, logger } from './config';
import router from './routes';
import './db';
import './schedulers';

const app = express();
app.use(cors());

app.use('/aircraft', router);

const port = config.port;

app.listen(port, () => {
    logger.info(`App is running on port ${port}`);
});
