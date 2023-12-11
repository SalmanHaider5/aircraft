import { logger } from '../config';
import { newsService } from "../services";

export const getNews = async (req, res) => {
    const records = req.query.records;
    const page = req.query.page;
    const result = await newsService.fetchNewsFromDB(records, page);
    logger.info({
        event: 'Controller: Records from DB',
        result
    })
    res.status(result.statusCode).json(result);
};