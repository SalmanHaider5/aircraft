import cron from 'node-cron';
import { logger } from '../config'
import { newsService } from '../services';
import { newsConstants } from '../constants';

const interval = newsConstants.scheduler.interval;

const job = async () => {
    logger.info('News: Scheduler Started');
    const news = await newsService.fetchNews() || [];
    logger.info({
        event: 'Scheduler: Fetch News',
        news
    });
    if(news.length > 0){
        for(let i in news){
            if(news[i].length > 0){
                const response = await newsService.createNews(news[i]);
                logger.info(response);
            }
        }
    }else{
        logger.info({
            event: 'Scheduler: No news found. :-)'
        });
    }
}

cron.schedule(interval, job);