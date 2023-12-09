import { logger } from '../config';
import { registrationsServices } from "../services";

export const getRegistrations = async (req, res) => {
    const records = req.query.records;
    const page = req.query.page;
    const result = await registrationsServices.fetchRegistrationsFromDB(records, page);
    logger.info({
        event: 'Controller: Records from DB',
        result
    })
    res.status(result.statusCode).json(result);
};