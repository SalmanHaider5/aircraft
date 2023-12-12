import { logger } from '../config';
import { airportsService } from "../services";

export const getAirports = async (req, res) => {
    const records = req.query.records;
    const page = req.query.page;
    const result = await airportsService.fetchAirportRecords(records, page);
    logger.info({
        event: 'Controller: Records from DB',
        result
    })
    res.status(result.statusCode).json(result);
};

export const createAirportsByFile = async (req, res) => {
    const result = await airportsService.readExcel();
    logger.info({
        event: 'Controller: Creating new records',
        result
    })
    res.status(result.statusCode).json(result);
}