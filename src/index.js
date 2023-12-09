import express from 'express';
import { config, logger } from './config';
import router from './routes';
import './db';
import './schedulers';

const app = express();
app.use('/aircraft', router);

const port = config.port;

app.listen(port, () => {
    logger.info(`App is running on port ${port}`);
});
