import { config } from '../config'

export const companyStocksConstants = {
    scheduler: {
        interval: '30 23 * * *'
    },
    stonkApiUrl: 'https://realstonks.p.rapidapi.com/',
    stonkApiHeaders: {
        'X-RapidAPI-Key': `${config.rapidApi.key}`,
        'X-RapidAPI-Host': `${config.rapidApi.host}`
    },
    companies: [
        "GD",
        "TXT",
        "BDRAF",
        "ERF",
        "DUAVF",
        "UP",
        "EADSF",
        "BA",
        "BP",
        "NTOIF",
        "SHEL"
    ]
};