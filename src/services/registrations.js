import * as cheerio from 'cheerio';
import { logger } from '../config'
import { Registrations } from '../db/models';
import { registrationsConstants } from '../constants'
import { fetchHtmlContent, registrationParser } from '../utils';


export const createRegistration = async (data) => {
    try{
        logger.info({
            event: 'Service: New Registration',
            data
        });
        const registration = await Registrations.create(data);
        logger.info({
            event: 'Service: Record added in Mongo DB',
            registration
        });
        return registration;
    }catch(err){
        if(err.code === 11000){
            logger.info('Service: Record already exists.');
        }
        logger.error(err);
    }
}

export const fetchRegistrationsFromDB = async (records, page) => {
    try{
        const numberOfRecords = records || 10;
        const currentPage = page - 1 || 0;
        logger.info({
            event: 'Service: New Request Registrations from DB',
            data: {
                numberOfRecords,
                currentPage
            }
        });
        const registrations = await Registrations.find().skip(numberOfRecords * currentPage).limit(numberOfRecords);
        logger.info({
            event: 'Service: Registrations from DB',
            registrations
        });
        return {
            status: 'Success',
            statusCode: 200,
            count: registrations.length,
            data: registrations
        };
    }catch(err){
        logger.error(err);
    }
}

export const fetchLastPageNumber = async () => {
    try{
        const { home_url, url_headers } = registrationsConstants;
        const options = {
            headers: url_headers
        };
        console.log("Invoked")
        logger.info({
            event: 'Service: Request for Pagination to Check Page',
            data: {
                url: home_url,
                options
            }
        });
        const html = await fetchHtmlContent(home_url, options);
        const $ = cheerio.load(html);
        const pagesStr = $('.pagination2center p').text().trim();
        const pageNumber = await registrationParser.parseLastPageNumber(pagesStr);
        console.log("Page Number =>", pageNumber);
        logger.info({
            event: 'Service: Last Page Number',
            pageNumber
        });
        return pageNumber;
    }catch(err){
        logger.error(err);
    }
}

export const fetchRegistrations = async (pageNumber) => {
    try{
        logger.info({
            event: 'Service: Request for Registrations for Specific Page',
            pageNumber
        });
        const { home_url, url_headers } = registrationsConstants;
        const options = {
            headers: url_headers
        };
        const url = `${home_url}?Sort_Option=5&Page=${pageNumber}`
        logger.info({
            event: 'Service: Request for Registrations for Specific Page',
            data: {
                url,
                pageNumber,
                options
            }
        });
        const html = await fetchHtmlContent(url, options);
        const registrations = await registrationParser.parseAllRegistrations(html);
        logger.info({
            event: 'Service: All Registrations for Specific Page',
            registrations
        });
        return registrations;
    }catch(err){
        logger.error(err);
    }
}

export const fetchRegistrationRecord = async(nNumber) => {
    try{
        const { registration_url, url_headers } = registrationsConstants;
        const options = {
            headers: url_headers
        };
        const url = registration_url + nNumber;
        logger.info({
            event: 'Service: Request for Registration Detail for N-Number',
            data: {
                url,
                nNumber,
                options
            }
        });
        const html = await fetchHtmlContent(url, options);
        const record = await registrationParser.parseRegistrationData(nNumber, html);
        logger.info({
            event: 'Service: Registration Detail for N-Number',
            record
        });
        return record;
    }catch(err){
        logger.error(err);
    }
}