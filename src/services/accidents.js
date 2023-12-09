import { logger } from '../config'
import { Accidents } from '../db/models';
import { accidentsConstants } from '../constants'
import { accidentsParser, fetchJsonData } from '../utils';

export const createAccident = async (data) => {
    try{
        logger.info({
            event: 'Service: New Accident',
            data
        });
        const accident = await Accidents.create(data);
        logger.info({
            event: 'Service: Record added in Mongo DB',
            accident
        });
        return accident;
    }catch(err){
        if(err.code === 11000){
            logger.info('Service: Record already exists.');
        }
        logger.error(err);
    }
}

export const fetchAccidentsFromDB = async (records, page) => {
    try{
        const numberOfRecords = records || 10;
        const currentPage = page - 1 || 0;
        logger.info({
            event: 'Service: New Request Accidents from DB',
            data: {
                numberOfRecords,
                currentPage
            }
        });
        const accidents = await Accidents.find().skip(numberOfRecords * currentPage).limit(numberOfRecords);
        logger.info({
            event: 'Service: Accidents from DB',
            accidents
        });
        return {
            status: 'Success',
            statusCode: 200,
            count: accidents.length,
            data: accidents
        };
    }catch(err){
        logger.error(err);
    }
}


export const fetchAccidents = async (sessionId, startingDate, endingDate) => {
    try{
        logger.info({
            event: 'Service: Request for Accidents ',
            data: { sessionId, startingDate, endingDate }
        });
        const { mainUrl, headers } = accidentsConstants;
        const options = {
            headers: headers,
            method: 'POST',
            body: JSON.stringify(await accidentsParser.getAccidentsRequestBody(sessionId, startingDate, endingDate))
        };
        const data = await fetchJsonData(mainUrl, options);
        const accidents = accidentsParser.getFilteredAccidents(data); 
        logger.info({
            event: 'Service: All Accidents',
            accidents
        });
        return accidents;
    }catch(err){
        logger.error(err);
    }
}