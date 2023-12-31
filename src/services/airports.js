import fs from 'fs';
import xcelToJson from 'convert-excel-to-json';
import { logger } from '../config';
import { Airports } from '../db/models'
import { airportsConstants } from '../constants';
import { airportsParser } from '../utils';

export const readExcel = async (file) => {
    try{
        const { columns } = airportsConstants;
        const { formatAirportData } = airportsParser;
        const files = fs.readdirSync(airportsConstants.fileUploadPath);
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
            sourceFile: `${airportsConstants.fileUploadPath}/${excelFiles[0]}`,
            columnToKey: columns
        });
        let obj = {};
        if(result && result.Sheet1){
            const data = result.Sheet1;
            data.shift();
            const validRecords = [], invalidRecords = [];
            for(let i in data){
                const record = formatAirportData(data[i]);
                if(!!record) validRecords.push(record);
                else invalidRecords.push(data[i]);
            }
            const response = await Airports.insertMany(validRecords, { ordered: false }).catch(err => {
                logger.error(err);
            });
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
        logger.info({
            event: 'Service: Records added in MongoDB',
            data: obj
        });
        fs.unlink(`${airportsConstants.fileUploadPath}/${excelFiles[0]}`, (err) => {
            logger.info('File removed!');    
        });
        return obj;
    }catch(err){
        logger.error(err);
    }
}

export const fetchAirportRecords = async (records, page) => {
    try{
        const numberOfRecords = records || 10;
        const currentPage = page - 1 || 0;
        logger.info({
            event: 'Service: New Request airports from DB',
            data: {
                numberOfRecords,
                currentPage
            }
        });
        const airports = await Airports.find().skip(numberOfRecords * currentPage).limit(numberOfRecords);
        logger.info({
            event: 'Service: Airports from DB',
            airports
        });
        return {
            status: 'Success',
            statusCode: 200,
            count: airports.length,
            data: airports
        };
    }catch(err){
        logger.error(err);
    }
}