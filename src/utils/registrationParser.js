import * as cheerio from 'cheerio';
import { registrationsConstants } from "../constants";

export const parseLastPageNumber = async (str) => {
    const pages = str.split(" ");
    const lastPage = parseInt(pages[pages.length - 1].split(")")[0]);
    return lastPage;
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
        serialNumber: $('td[data-label="Serial Number"]').text().trim() || "",
        model: $('td[data-label="Model"]').text().trim() || "",
        mfrYear: $('td[data-label="Mfr Year"]').text().trim() || "",
        typeRegistration: $('td[data-label="Type Registration"]').text().trim() || "",
        status: $('td[data-label="Status"]').text().trim() || "",
        certificateIssueDate: $('td[data-label="Certificate Issue Date"]').text().trim() || "",
        typeEngine: $('td[data-label="Engine Type"]').text().trim() || "",
        modelSCodebase8: $('td[data-label="Mode S Code (Base 8 / oct)"]').text().trim() || "",
        modelSCodebase16: $('td[data-label="Mode S Code (Base 16 / Hex)"]').text().trim() || "",
        fractionalOwner: $('td[data-label="Fractional Owner"]').text().trim() || "",
        registeredOwnerName: $('td[data-label="Name"][colspan="3"]').text().trim() || "",
        registeredOwnerStreet: $('td[data-label="Street"]').text().trim() || "",
        registeredOwnerCity: $('td[data-label="City"]').text().trim() || "",
        registeredOwnerState: $('td[data-label="State"]').text().trim() || "",
        registeredOwnerZipCode: $('td[data-label="Zip Code"]').text().trim() || "",
        registeredOwnerCountry: $('td[data-label="Country"]').text().trim() || "",
        engineManufacturer: $('td[data-label="Engine Manufacturer"]').text().trim() || "",
        engineModel: $('td[data-label="Engine Model"]').text().trim() || "",
        awDate: $('td[data-label="A/W Date"]').text().trim() || ""
    }
}