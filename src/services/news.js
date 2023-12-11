import { logger } from '../config'
import { News } from '../db/models';
import { newsConstants } from '../constants'
import { newsParser, fetchJsonData } from '../utils';

export const createNews = async (data) => {
    try{
        logger.info({
            event: 'Service: New news',
            data
        });
        const news = await News.insertMany(data);
        logger.info({
            event: 'Service: Records added in Mongo DB',
            news
        });
        return news;
    }catch(err){
        if(err.code === 11000){
            logger.info('Service: Record already exists.');
        }
        logger.error(err);
    }
}

export const fetchNewsFromDB = async (records, page) => {
    try{
        const numberOfRecords = records || 10;
        const currentPage = page - 1 || 0;
        logger.info({
            event: 'Service: New Request News from DB',
            data: {
                numberOfRecords,
                currentPage
            }
        });
        const news = await News.find().skip(numberOfRecords * currentPage).limit(numberOfRecords);
        logger.info({
            event: 'Service: News from DB',
            news
        });
        return {
            status: 'Success',
            statusCode: 200,
            count: news.length,
            data: news
        };
    }catch(err){
        logger.error(err);
    }
}


export const fetchNews = async () => {
    try{
        logger.info({
            event: 'Service: Request for News '
        });
        const { newsDataUrl, keywords, requestHeaders, requestLanguage } = newsConstants;
        const options = {
            headers: requestHeaders
        };
        const urls = keywords.map(keyword => `${newsDataUrl}?q='${keyword}'&language=${requestLanguage}`);
        const news = [];
        for(let i in urls){
            const response = await fetchJsonData(urls[i], options);
            const data = newsParser.getNewsParsedData(response, keywords[i]);
            if(data){
                news.push(data);
            }
        }
        logger.info({
            event: 'Service: All News',
            news
        });
        return news;
    }catch(err){
        logger.error(err);
    }
}