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
    try{
        if(req.file){
            const file = req.file.filename;
            const result = await airportsService.readExcel(file);
            if(result){
                logger.info({
                    event: 'Controller: Creating new records',
                    result
                })
                res.status(result.statusCode).json(result);
            }else{
                res.status(400).json({
                    response: 'Unable to upload the document, please try again.'
                });
            }
        }
    }catch(err){
        logger.error(err);
    }
}