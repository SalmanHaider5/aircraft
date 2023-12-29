import moment from 'moment';
import { accidentsConstants } from '../constants'

export const getAccidentsRequestBody = async (sessionId, startingDate, endingDate) => {
    return {
        "ResultSetSize": 100,
        "ResultSetOffset": 0,
        "QueryGroups": [
            {
                "QueryRules": [
                    {
                        "RuleType": "Simple",
                        "Values": [
                            `${startingDate}`
                        ],
                        "Columns": [
                            "Event.EventDate"
                        ],
                        "Operator": "is on or after",
                        "overrideColumn": "",
                        "selectedOption": {
                            "FieldName": "EventDate",
                            "DisplayText": "Event date",
                            "Columns": [
                                "Event.EventDate"
                            ],
                            "Selectable": true,
                            "InputType": "Date",
                            "RuleType": 0,
                            "Options": null,
                            "TargetCollection": "cases",
                            "UnderDevelopment": true
                        }
                    },
                    {
                        "RuleType": "Simple",
                        "Values": [
                            `${endingDate}`
                        ],
                        "Columns": [
                            "Event.EventDate"
                        ],
                        "Operator": "is on or before",
                        "selectedOption": {
                            "FieldName": "EventDate",
                            "DisplayText": "Event date",
                            "Columns": [
                                "Event.EventDate"
                            ],
                            "Selectable": true,
                            "InputType": "Date",
                            "RuleType": 0,
                            "Options": null,
                            "TargetCollection": "cases",
                            "UnderDevelopment": true
                        },
                        "overrideColumn": ""
                    },
                    {
                        "RuleType": "Simple",
                        "Values": [
                            "Aviation"
                        ],
                        "Columns": [
                            "Event.Mode"
                        ],
                        "Operator": "is",
                        "selectedOption": {
                            "FieldName": "Mode",
                            "DisplayText": "Investigation mode",
                            "Columns": [
                                "Event.Mode"
                            ],
                            "Selectable": true,
                            "InputType": "Dropdown",
                            "RuleType": 0,
                            "Options": null,
                            "TargetCollection": "cases",
                            "UnderDevelopment": true
                        },
                        "overrideColumn": ""
                    }
                ],
                "AndOr": "and",
                "inLastSearch": false,
                "editedSinceLastSearch": false
            }
        ],
        "AndOr": "and",
        "SortColumn": null,
        "SortDescending": true,
        "TargetCollection": "cases",
        "SessionId": sessionId
    }
}

const parseAccidentData =  (data) => {
    const { dataKeys } = accidentsConstants;
    const accident = {};
    dataKeys.forEach(element => {
        if(element.key === "ReportDate"){
            const reportDate = data.find(event => event.FieldName === element.key).Values[0];
            if(reportDate)
                accident[element.dbKey] = moment(reportDate).format('L');
            else
                accident[element.dbKey] = "N/A"
             
        }else{
            accident[element.dbKey] = data.find(event => event.FieldName === element.key).Values[0] || "";
        }
    });
    return accident;
}

export const getFilteredAccidents = data => {
    const { models } = accidentsConstants;
    return data.Results.map( (accident) => {
        return parseAccidentData(accident.Fields);
    }).filter(accident => models.includes(accident.model));
}

export const getFirstDateOfLastMonth = () => {
    return moment().subtract(1, 'months').startOf('month').format('YYYY-MM-DD').toString();
}

export const getLastDateOfLastMonth = () => {
    return moment().subtract(1, 'months').endOf('month').format('YYYY-MM-DD').toString();
}