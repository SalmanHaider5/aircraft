import { config } from '../config';

export const newsConstants = {
    scheduler: {
        interval: '0 10,14,18 * * *'
    },
    newsDataUrl: 'https://newsomaticapi.p.rapidapi.com/top',
    requestHeaders: {
        'X-RapidAPI-Key': `${config.rapidApi.key}`,
        'X-RapidAPI-Host': 'newsomaticapi.p.rapidapi.com'
    },
    requestLanguage: 'en',
    keywords: [
        "private jet",
        "business jet",
        "private aviation",
        "bombardier",
        "dassault falcon",
        "gulfstream",
        "learjet",
        "cessna citation",
        "embraer legacy",
        "embraer praetor",
        "embraer phenom",
        "embraer lineage",
        "hondajet",
        "nextant",
        "pilatus pc-24",
        "textron"
    ]
};