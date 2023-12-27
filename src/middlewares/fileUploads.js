import multer from 'multer';
import { airportsConstants, registrationsConstants } from '../constants';

const excelFile = file => {
    return file.mimetype.includes("excel") || file.mimetype.includes("spreadsheetml");
}

const checkFileType = (req, file, cb) => {
    if(excelFile(file)) cb(null, true);
    else cb("Please upload valid Excel Sheet.", false);
}

const airportStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, airportsConstants.fileUploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const registrationsStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, registrationsConstants.fileUploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

export const airportsUploadFile = multer({
    storage: airportStorage,
    fileFilter: checkFileType
});

export const registrationsUploadFile = multer({
    storage: registrationsStorage,
    fileFilter: checkFileType
});