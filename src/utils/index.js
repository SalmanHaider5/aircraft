import moment from 'moment';
import * as registrationParser from './registrationParser'
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const fetchHtmlContent = async (url, options) => {
    const htmlContent = await fetch(url, options);
    const content = await htmlContent.text();
    return content;
}

const fetchCurrentFormatedDay = async() => {
    return moment().format('L').toString();
}

const fetchPreviousFormatedDay = async(days) => {
    return moment().subtract(days, 'days').format('L').toString();
}

export {
    registrationParser,
    fetchCurrentFormatedDay,
    fetchPreviousFormatedDay,
    fetchHtmlContent
}