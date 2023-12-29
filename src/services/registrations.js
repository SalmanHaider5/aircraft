import fs from 'fs';
import * as cheerio from 'cheerio';
import xcelToJson from 'convert-excel-to-json';
import { logger } from '../config'
import { Registrations } from '../db/models';
import { registrationsConstants } from '../constants'
import { fetchHtmlContent, registrationParser } from '../utils';


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

export const readExcel = async () => {
    try{
        const { columns } = registrationsConstants;
        const { formatRegistrationData } = registrationParser;
        const files = fs.readdirSync(registrationsConstants.fileUploadPath);
        const excelFiles = files.map(file => {
            const fileNameArray = file.split(".");
            if(fileNameArray[fileNameArray.length - 1] === 'xlsx'){
                return file;
            }
        }).filter(file => !!file);
        if(excelFiles.length > 1 || excelFiles.length === 0){
            return {
                sccess: false,
                statusCode: 422,
                error: 'There is no file or multiple files. Please keep just 1 *.xslx file.'
            }
        }
        const result = xcelToJson({
            sourceFile: `${registrationsConstants.fileUploadPath}/${excelFiles[0]}`,
            columnToKey: columns
        });
        let obj = {};
        if(result && result.Sheet1){
            const data = result.Sheet1;
            data.shift();
            const validRecords = [], invalidRecords = [];
            for(let i in data){
                const record = formatRegistrationData(data[i]);
                if(!!record) validRecords.push(record);
                else invalidRecords.push(data[i]);
            }
            const response = await Registrations.insertMany(data, { ordered: false });
            obj = {
                success: true,
                statusCode: 200,
                totalRecords: data.length,
                success: response.length,
                failed: invalidRecords.length,
                failedRecords: invalidRecords
            };
        }else{
            obj = {
                success: false,
                statusCode: 400,
                message: "Unable to upload data. Please upload file with valid format.",
                format: airportsConstants.columns
            };
        }
        fs.unlink(`${registrationsConstants.fileUploadPath}/${excelFiles[0]}`, (err) => {
            logger.info('File removed!');    
        });
        logger.info({
            event: 'Service: Records added in MongoDB',
            data: obj
        });
        return obj;
    }catch(err){
        logger.error(err);
    }
}