import path from 'path';

export const registrationsConstants = {
    fileUploadPath: path.join(__dirname, '../../public/registrations'),
    columns: {
        A: 'regNumber',
        C: 'serialNumber',
        E: 'faaName',
        F: 'cppName',
        G: 'engineModel',
        H: 'mfrYear',
        I: 'typeRegistration',
        J: 'registeredOwnerName',
        K: 'registeredOwnerStreet',
        M: 'registeredOwnerCity',
        N: 'registeredOwnerState',
        O: 'registeredOwnerZipCode',
        Q: 'registeredOwnerCountry',
        S: 'certificateIssueDate',
        V: 'typeEngine',
        W: 'status',
        X: 'modelSCodebase16',
        Y: 'fractionalOwner',
        Z: 'awDate'
    }
};