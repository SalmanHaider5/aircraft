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
        { key: "GD", name: "General Dynamic" },
        { key: "TXT", name: "Textron" },
        { key: "BDRAF", name: "Bombardier" },
        { key: "ERF", name: "Embraer" },
        { key: "DUAVF", name: "Dassault Aviation" },
        { key: "UP", name: "Wheels Up" },
        { key: "EADSF", name: "Airbus" },
        { key: "BA", name: "Boeing" },
        { key: "BP", name: "BP PLC" },
        { key: "NTOIF", name: "Neste OYJ" },
        { key: "SHEL", name: "Shell PLC" },
        { key: "HON", name: "Honeywell " },
        { key: "GE", name: "General Electric" },
        { key: "RYCEF", name: "Rolls-Royce" },
        { key: "WMB", name: "Williams International" },
        { key: "COL", name: "Rockwell Collins" }
    ]
};