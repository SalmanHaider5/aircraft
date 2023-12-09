import mongoose from 'mongoose';
import { config, logger } from "../config";

mongoose.connect(config.mongoose.url)
.then(() => {
    logger.info('Connected to MongoDB');
})
.catch(err => {
    logger.error(err);
});

