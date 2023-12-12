import cron from 'node-cron';
import moment from 'moment';
import { logger } from '../config'
import { accidentsService } from '../services';
import { accidentsConstants } from '../constants';
import { accidentsParser } from '../utils';

const interval = accidentsConstants.scheduler.interval;

const job = async () => {
    logger.info('Scheduler Started');
    const { sessionId } = accidentsConstants;
    const startDate = accidentsParser.getFirstDateOfLastMonth();
    const lastDate = accidentsParser.getLastDateOfLastMonth();
    const accidents = await accidentsService.fetchAccidents(sessionId, startDate, lastDate);
    logger.info({
        event: 'Scheduler: Fetch accidents after all Filters',
        accidents
    });
    if(accidents.length > 0){
        const response = await accidentsService.createAccident(accidents) || [];
        logger.info(response);
    }else{
        logger.info({
            event: 'Scheduler: No new accidents found. :-)'
        });
    }
}

cron.schedule(interval, job);