import * as cheerio from 'cheerio';
import moment from 'moment';
import { registrationsConstants } from "../constants";

export const parseLastPageNumber = async (str) => {
    const pages = str.split(" ");
    const lastPage = parseInt(pages[pages.length - 1].split(")")[0]);
    return lastPage;
}

export const fetchPreviousDayForRegistrations = async (date) =>{
    return moment(date, 'L').subtract(1, 'days').format('L').toString();
}

export const parseAllRegistrations = async (htmlContent) =>{
    const { models } = registrationsConstants;
    let registrations = [];
    const $ = cheerio.load(htmlContent);
    $('.devkit-table-row').each((index, element) => {
        if (index !== 0){
            const tds = $(element).find('td');
            const nNumber = $(tds[0]).text().trim();
            const model = $(tds[3]).text().trim();
            const certIssueDate = $(tds[4]).text().trim();
            const row = {
                nNumber,
                model,
                certIssueDate
            };
            registrations.push(row); 
        }
    });
    return registrations;
}

export const parseRegistrationData = async (nNumber, htmlContent) => {
    const $ = cheerio.load(htmlContent);
    return {
        regNumber: nNumber,
        serialNumber: $('td[data-label="Serial Number"]').first().text().trim() || "",
        model: $('td[data-label="Model"]').first().text().trim() || "",
        mfrYear: $('td[data-label="Mfr Year"]').first().text().trim() || "",
        typeRegistration: $('td[data-label="Type Registration"]').first().text().trim() || "",
        status: $('td[data-label="Status"]').first().text().trim() || "",
        certificateIssueDate: $('td[data-label="Certificate Issue Date"]').first().text().trim() || "",
        typeEngine: $('td[data-label="Engine Type"]').first().text().trim() || "",
        modelSCodebase8: $('td[data-label="Mode S Code (Base 8 / oct)"]').first().text().trim() || "",
        modelSCodebase16: $('td[data-label="Mode S Code (Base 16 / Hex)"]').first().text().trim() || "",
        fractionalOwner: $('td[data-label="Fractional Owner"]').first().text().trim() || "",
        registeredOwnerName: $('td[data-label="Name"][colspan="3"]').first().text().trim() || "",
        registeredOwnerStreet: $('td[data-label="Street"]').first().text().trim() || "",
        registeredOwnerCity: $('td[data-label="City"]').first().text().trim() || "",
        registeredOwnerState: $('td[data-label="State"]').first().text().trim() || "",
        registeredOwnerZipCode: $('td[data-label="Zip Code"]').first().text().trim() || "",
        registeredOwnerCountry: $('td[data-label="Country"]').first().text().trim() || "",
        engineManufacturer: $('td[data-label="Engine Manufacturer"]').first().text().trim() || "",
        engineModel: $('td[data-label="Engine Model"]').first().text().trim() || "",
        awDate: $('td[data-label="A/W Date"]').first().text().trim() || ""
    }
}

export const formatRegistrationData = data => {
    if(!data.regNumber) return undefined;
    const keys = Object.keys(data);
    let obj = {};
    keys.forEach(key => {
        obj[key] = `${data[key]}` || ""
    });
    return obj;
}