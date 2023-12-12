import moment from 'moment';

export const getCompanyStockParsedData = (data, company) => {
    if(!data) return undefined;
    return {
        companyCode: company.key,
        companyName: company.name,
        date: data.date = moment().format('L').toString(),
        price: data.price,
        changePoint: data.change_point,
        changePercentage: data.change_percentage
    }
}