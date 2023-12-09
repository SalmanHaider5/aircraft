import cron from 'node-cron';
import { logger } from '../config'
import { registrationsServices } from '../services';
import { registrationsConstants } from '../constants';
import { fetchPreviousFormatedDay } from '../utils';

const interval = registrationsConstants.scheduler.interval;

const filterRegistrartionsWithDate = async (registrations) => {
    const lastDate = fetchPreviousFormatedDay(1);
    return registrations.filter(registration => registration.certIssueDate === lastDate);
}

const filterRegistrartionsWithModel = async(registrations) => {
    const { models } = registrationsConstants;
    let newRegistrations = [];
    registrations.forEach(registration => {
        const modelFound = models.indexOf(registration.model) > 0;
        if(modelFound){
            newRegistrations.push(registration.nNumber);
        }
    });
    return newRegistrations;
}


const fetchRegistrations = async () => {
    const previousDate = fetchPreviousFormatedDay(2);
    let allRegistrations = [];
    let dataEnded = false;
    let lastPage = await registrationsServices.fetchLastPageNumber();
    logger.info({
        event: 'Scheduler: Fetch Last Page',
        lastPage
    });
    let page = lastPage;
    while(!dataEnded){
        const registrations = await registrationsServices.fetchRegistrations(page);
        page = page - 1;
        dataEnded = !!registrations.find(registration => registration.certIssueDate === previousDate);
        allRegistrations = [...allRegistrations, ...registrations]
    }
    logger.info({
        event: 'Scheduler: Fetch All Registrations',
        allRegistrations
    });
    const latestRegistrations =  await filterRegistrartionsWithDate(allRegistrations);
    logger.info({
        event: 'Scheduler: Filtered Registrations with Date',
        latestRegistrations
    });
    const filteredRegistrations = await filterRegistrartionsWithModel(latestRegistrations);
    logger.info({
        event: 'Scheduler: Filtered Registrations with Models',
        filteredRegistrations
    });
    return filteredRegistrations;
}

const job = async () => {
    logger.info('Scheduler Started');
    const registrations = await fetchRegistrations();
    logger.info({
        event: 'Scheduler: Fetch Registrations after all Filters',
        registrations
    });
    if(registrations.length > 0){
        registrations.forEach(async(registration) => {
            const record = await registrationsServices.fetchRegistrationRecord(registration);
            const response = await registrationsServices.createRegistration(record);
            logger.info('Scheduler: Record Added', response);
        });
    }else{
        logger.info({
            event: 'Scheduler: No new registrations found. :-)'
        });
    }
}

cron.schedule(interval, job);