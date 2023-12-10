import moment from 'moment';
import * as registrationParser from './registrations'
import * as accidentsParser from './accidents'
import * as companyStocksParser from './companyStocks';

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const fetchHtmlContent = async (url, options) => {
    const htmlContent = await fetch(url, options);
    const content = await htmlContent.text();
    return content;
}

const fetchJsonData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}

const fetchCurrentFormatedDay = async () => {
    return moment().format('L').toString();
}

const fetchPreviousFormatedDay = async (days) => {
    return moment().subtract(days, 'days').format('L').toString();
}

export {
    registrationParser,
    accidentsParser,
    companyStocksParser,
    fetchJsonData,
    fetchCurrentFormatedDay,
    fetchPreviousFormatedDay,
    fetchHtmlContent
}