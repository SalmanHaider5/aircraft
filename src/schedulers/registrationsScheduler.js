import cron from 'node-cron';
import { logger } from '../config'
import { registrationsService } from '../services';
import { registrationsConstants } from '../constants';
import { fetchPreviousFormatedDay } from '../utils';

const interval = registrationsConstants.scheduler.interval;

const filterRegistrartionsWithDate = async (registrations) => {
    const lastDate = await fetchPreviousFormatedDay(1);
    return registrations.filter(registration => registration.certIssueDate === lastDate);
}

const filterRegistrartionsWithModel = async(registrations) => {
    const { models } = registrationsConstants;
    let newRegistrations = [];
    registrations.forEach(registration => {
        const modelFound = models.includes(registration.model);
        if(modelFound){
            newRegistrations.push(registration.nNumber);
        }
    });
    return newRegistrations;
}


const fetchRegistrations = async () => {
    const previousDate = await fetchPreviousFormatedDay(2);
    let allRegistrations = [];
    let dataEnded = false;
    let lastPage = await registrationsService.fetchLastPageNumber();
    logger.info({
        event: 'Scheduler: Fetch Last Page',
        previousDate,
        lastPage
    });
    let page = lastPage;
    while(!dataEnded){
        const registrations = await registrationsService.fetchRegistrations(page);
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
            const record = await registrationsService.fetchRegistrationRecord(registration);
            const response = await registrationsService.createRegistration(record);
            logger.info(response);
        });
    }else{
        logger.info({
            event: 'Scheduler: No new registrations found. :-)'
        });
    }
}
cron.schedule(interval, job);