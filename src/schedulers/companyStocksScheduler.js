import cron from 'node-cron';
import { logger } from '../config'
import { companyStocksService } from '../services';
import { accidentsConstants } from '../constants';

const interval = accidentsConstants.scheduler.interval;

const job = async () => {
    logger.info('Company Stocks: Scheduler Started');
    const companyStocks = await companyStocksService.fetchCompanyStocks() || [];
    logger.info({
        event: 'Scheduler: Fetch company stocks',
        companyStocks
    });
    if(companyStocks.length > 0){
        const response = await companyStocksService.createCompanyStocks(companyStocks);
        logger.info(response);
    }else{
        logger.info({
            event: 'Scheduler: No company stocks found. :-)'
        });
    }
}

cron.schedule(interval, job);