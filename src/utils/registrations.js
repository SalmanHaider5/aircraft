export const formatRegistrationData = data => {
    if(!data.regNumber) return undefined;
    const keys = Object.keys(data);
    let obj = {};
    keys.forEach(key => {
        obj[key] = `${data[key]}` || ""
    });
    return obj;
}