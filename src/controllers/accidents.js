import { logger } from '../config';
import { accidentsService } from "../services";

export const getAccidents = async (req, res) => {
    const records = req.query.records;
    const page = req.query.page;
    const result = await accidentsService.fetchAccidentsFromDB(records, page);
    logger.info({
        event: 'Controller: Records from DB',
        result
    })
    res.status(result.statusCode).json(result);
};