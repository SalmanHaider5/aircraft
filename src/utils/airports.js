export const formatAirportData = data => {
    if(!data.icao) return undefined;
    const keys = Object.keys(data);
    let obj = {};
    keys.forEach(key => {
        obj[key] = `${data[key]}` || ""
    });
    return obj;
}