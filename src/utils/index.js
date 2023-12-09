import moment from 'moment';
import * as registrationParser from './registrations'
import * as accidentsParser from './accidents'

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const fetchHtmlContent = async (url, options) => {
    const htmlContent = await fetch(url, options);
    const content = await htmlContent.text();
    return content;
}

const fetchJsonData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
    // return {
    //     "Results": [
    //         {
    //             "Fields": [
    //                 {
    //                     "FieldName": "NtsbNo",
    //                     "ExportName": "NtsbNo",
    //                     "Values": [
    //                         "WPR24FA052"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "CompletionStatus",
    //                     "ExportName": null,
    //                     "Values": [
    //                         "In work"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "EventType",
    //                     "ExportName": "EventType",
    //                     "Values": [
    //                         "Accident"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "Mkey",
    //                     "ExportName": "Mkey",
    //                     "Values": [
    //                         "193483"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "IsStudy",
    //                     "ExportName": null,
    //                     "Values": [
    //                         "false"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "EventDate",
    //                     "ExportName": "EventDate",
    //                     "Values": [
    //                         "2023-12-06T08:40:00Z"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "City",
    //                     "ExportName": "City",
    //                     "Values": [
    //                         "Taylor"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "State",
    //                     "ExportName": "State",
    //                     "Values": [
    //                         "Arizona"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "Country",
    //                     "ExportName": "Country",
    //                     "Values": [
    //                         "United States"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "ReportNo",
    //                     "ExportName": "ReportNo",
    //                     "Values": []
    //                 },
    //                 {
    //                     "FieldName": "N#",
    //                     "ExportName": null,
    //                     "Values": [
    //                         "N449RA"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "VehicleMake",
    //                     "ExportName": null,
    //                     "Values": [
    //                         "REMOS AIRCRAFT GMBH"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "VehicleModel",
    //                     "ExportName": null,
    //                     "Values": [
    //                         "FALCON 10"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "HighestInjuryLevel",
    //                     "ExportName": null,
    //                     "Values": []
    //                 },
    //                 {
    //                     "FieldName": "HasSafetyRec",
    //                     "ExportName": "HasSafetyRec",
    //                     "Values": [
    //                         "false"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "Mode",
    //                     "ExportName": "Mode",
    //                     "Values": [
    //                         "Aviation"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "ReportType",
    //                     "ExportName": "ReportType",
    //                     "Values": [
    //                         "DirectorBrief"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "DocketPublishDate",
    //                     "ExportName": null,
    //                     "Values": []
    //                 },
    //                 {
    //                     "FieldName": "OriginalPublishedDate",
    //                     "ExportName": null,
    //                     "Values": []
    //                 },
    //                 {
    //                     "FieldName": "ReportDate",
    //                     "ExportName": null,
    //                     "Values": [
    //                         "2023-12-06T23:10:22.213Z"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "MostRecentReportType",
    //                     "ExportName": null,
    //                     "Values": []
    //                 },
    //                 {
    //                     "FieldName": "EV_ID",
    //                     "ExportName": null,
    //                     "Values": []
    //                 },
    //                 {
    //                     "FieldName": "RepGenFlag",
    //                     "ExportName": null,
    //                     "Values": []
    //                 }
    //             ],
    //             "EntryId": "6572c8ce196a5415189544a0"
    //         },
    //         {
    //             "Fields": [
    //                 {
    //                     "FieldName": "NtsbNo",
    //                     "ExportName": "NtsbNo",
    //                     "Values": [
    //                         "GAA24WA050"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "CompletionStatus",
    //                     "ExportName": null,
    //                     "Values": [
    //                         "N/A"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "EventType",
    //                     "ExportName": "EventType",
    //                     "Values": [
    //                         "Accident"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "Mkey",
    //                     "ExportName": "Mkey",
    //                     "Values": [
    //                         "193482"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "IsStudy",
    //                     "ExportName": null,
    //                     "Values": [
    //                         "false"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "EventDate",
    //                     "ExportName": "EventDate",
    //                     "Values": [
    //                         "2023-12-04T18:15:00Z"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "City",
    //                     "ExportName": "City",
    //                     "Values": [
    //                         "Villejuif"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "State",
    //                     "ExportName": "State",
    //                     "Values": []
    //                 },
    //                 {
    //                     "FieldName": "Country",
    //                     "ExportName": "Country",
    //                     "Values": [
    //                         "France"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "ReportNo",
    //                     "ExportName": "ReportNo",
    //                     "Values": []
    //                 },
    //                 {
    //                     "FieldName": "N#",
    //                     "ExportName": null,
    //                     "Values": [
    //                         "F-BPIR"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "VehicleMake",
    //                     "ExportName": null,
    //                     "Values": [
    //                         "Piper"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "VehicleModel",
    //                     "ExportName": null,
    //                     "Values": [
    //                         "PA30"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "HighestInjuryLevel",
    //                     "ExportName": null,
    //                     "Values": [
    //                         "Serious"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "HasSafetyRec",
    //                     "ExportName": "HasSafetyRec",
    //                     "Values": [
    //                         "false"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "Mode",
    //                     "ExportName": "Mode",
    //                     "Values": [
    //                         "Aviation"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "ReportType",
    //                     "ExportName": "ReportType",
    //                     "Values": [
    //                         "None"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "DocketPublishDate",
    //                     "ExportName": null,
    //                     "Values": []
    //                 },
    //                 {
    //                     "FieldName": "OriginalPublishedDate",
    //                     "ExportName": null,
    //                     "Values": []
    //                 },
    //                 {
    //                     "FieldName": "ReportDate",
    //                     "ExportName": null,
    //                     "Values": [
    //                         "2023-12-06T22:36:37.149Z"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "MostRecentReportType",
    //                     "ExportName": null,
    //                     "Values": []
    //                 },
    //                 {
    //                     "FieldName": "EV_ID",
    //                     "ExportName": null,
    //                     "Values": []
    //                 },
    //                 {
    //                     "FieldName": "RepGenFlag",
    //                     "ExportName": null,
    //                     "Values": []
    //                 }
    //             ],
    //             "EntryId": "6572c8ce196a54151895449f"
    //         },
    //         {
    //             "Fields": [
    //                 {
    //                     "FieldName": "NtsbNo",
    //                     "ExportName": "NtsbNo",
    //                     "Values": [
    //                         "DCA24WA036"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "CompletionStatus",
    //                     "ExportName": null,
    //                     "Values": [
    //                         "N/A"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "EventType",
    //                     "ExportName": "EventType",
    //                     "Values": [
    //                         "Occurrence"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "Mkey",
    //                     "ExportName": "Mkey",
    //                     "Values": [
    //                         "193488"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "IsStudy",
    //                     "ExportName": null,
    //                     "Values": [
    //                         "false"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "EventDate",
    //                     "ExportName": "EventDate",
    //                     "Values": [
    //                         "2023-12-04T12:05:00Z"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "City",
    //                     "ExportName": "City",
    //                     "Values": [
    //                         "London"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "State",
    //                     "ExportName": "State",
    //                     "Values": [
    //                         "Other Foreign"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "Country",
    //                     "ExportName": "Country",
    //                     "Values": [
    //                         "United Kingdom"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "ReportNo",
    //                     "ExportName": "ReportNo",
    //                     "Values": []
    //                 },
    //                 {
    //                     "FieldName": "N#",
    //                     "ExportName": null,
    //                     "Values": [
    //                         "EI-HET"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "VehicleMake",
    //                     "ExportName": null,
    //                     "Values": [
    //                         "Boeing"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "VehicleModel",
    //                     "ExportName": null,
    //                     "Values": [
    //                         "737 Max 8-200"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "HighestInjuryLevel",
    //                     "ExportName": null,
    //                     "Values": []
    //                 },
    //                 {
    //                     "FieldName": "HasSafetyRec",
    //                     "ExportName": "HasSafetyRec",
    //                     "Values": [
    //                         "false"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "Mode",
    //                     "ExportName": "Mode",
    //                     "Values": [
    //                         "Aviation"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "ReportType",
    //                     "ExportName": "ReportType",
    //                     "Values": [
    //                         "None"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "DocketPublishDate",
    //                     "ExportName": null,
    //                     "Values": []
    //                 },
    //                 {
    //                     "FieldName": "OriginalPublishedDate",
    //                     "ExportName": null,
    //                     "Values": []
    //                 },
    //                 {
    //                     "FieldName": "ReportDate",
    //                     "ExportName": null,
    //                     "Values": [
    //                         "2023-12-07T18:01:01.013Z"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "MostRecentReportType",
    //                     "ExportName": null,
    //                     "Values": []
    //                 },
    //                 {
    //                     "FieldName": "EV_ID",
    //                     "ExportName": null,
    //                     "Values": []
    //                 },
    //                 {
    //                     "FieldName": "RepGenFlag",
    //                     "ExportName": null,
    //                     "Values": []
    //                 }
    //             ],
    //             "EntryId": "6572c8ce196a5415189544a1"
    //         },
    //         {
    //             "Fields": [
    //                 {
    //                     "FieldName": "NtsbNo",
    //                     "ExportName": "NtsbNo",
    //                     "Values": [
    //                         "GAA24WA049"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "CompletionStatus",
    //                     "ExportName": null,
    //                     "Values": [
    //                         "N/A"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "EventType",
    //                     "ExportName": "EventType",
    //                     "Values": [
    //                         "Accident"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "Mkey",
    //                     "ExportName": "Mkey",
    //                     "Values": [
    //                         "193471"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "IsStudy",
    //                     "ExportName": null,
    //                     "Values": [
    //                         "false"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "EventDate",
    //                     "ExportName": "EventDate",
    //                     "Values": [
    //                         "2023-12-04T09:59:00Z"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "City",
    //                     "ExportName": "City",
    //                     "Values": [
    //                         "Terre-de-Haut"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "State",
    //                     "ExportName": "State",
    //                     "Values": [
    //                         "Other Foreign"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "Country",
    //                     "ExportName": "Country",
    //                     "Values": [
    //                         "Guadeloupe"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "ReportNo",
    //                     "ExportName": "ReportNo",
    //                     "Values": []
    //                 },
    //                 {
    //                     "FieldName": "N#",
    //                     "ExportName": null,
    //                     "Values": [
    //                         "N15902"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "VehicleMake",
    //                     "ExportName": null,
    //                     "Values": [
    //                         "Piper"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "VehicleModel",
    //                     "ExportName": null,
    //                     "Values": [
    //                         "PA-32-260"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "HighestInjuryLevel",
    //                     "ExportName": null,
    //                     "Values": [
    //                         "Fatal"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "HasSafetyRec",
    //                     "ExportName": "HasSafetyRec",
    //                     "Values": [
    //                         "false"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "Mode",
    //                     "ExportName": "Mode",
    //                     "Values": [
    //                         "Aviation"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "ReportType",
    //                     "ExportName": "ReportType",
    //                     "Values": [
    //                         "None"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "DocketPublishDate",
    //                     "ExportName": null,
    //                     "Values": []
    //                 },
    //                 {
    //                     "FieldName": "OriginalPublishedDate",
    //                     "ExportName": null,
    //                     "Values": []
    //                 },
    //                 {
    //                     "FieldName": "ReportDate",
    //                     "ExportName": null,
    //                     "Values": [
    //                         "2023-12-05T02:09:08.257Z"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "MostRecentReportType",
    //                     "ExportName": null,
    //                     "Values": []
    //                 },
    //                 {
    //                     "FieldName": "EV_ID",
    //                     "ExportName": null,
    //                     "Values": []
    //                 },
    //                 {
    //                     "FieldName": "RepGenFlag",
    //                     "ExportName": null,
    //                     "Values": []
    //                 }
    //             ],
    //             "EntryId": "6572c8ce196a54151895449c"
    //         },
    //         {
    //             "Fields": [
    //                 {
    //                     "FieldName": "NtsbNo",
    //                     "ExportName": "NtsbNo",
    //                     "Values": [
    //                         "GAA24WA048"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "CompletionStatus",
    //                     "ExportName": null,
    //                     "Values": [
    //                         "N/A"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "EventType",
    //                     "ExportName": "EventType",
    //                     "Values": [
    //                         "Accident"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "Mkey",
    //                     "ExportName": "Mkey",
    //                     "Values": [
    //                         "193466"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "IsStudy",
    //                     "ExportName": null,
    //                     "Values": [
    //                         "false"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "EventDate",
    //                     "ExportName": "EventDate",
    //                     "Values": [
    //                         "2023-12-01T11:15:00Z"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "City",
    //                     "ExportName": "City",
    //                     "Values": [
    //                         "Madrid"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "State",
    //                     "ExportName": "State",
    //                     "Values": []
    //                 },
    //                 {
    //                     "FieldName": "Country",
    //                     "ExportName": "Country",
    //                     "Values": [
    //                         "Spain"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "ReportNo",
    //                     "ExportName": "ReportNo",
    //                     "Values": []
    //                 },
    //                 {
    //                     "FieldName": "N#",
    //                     "ExportName": null,
    //                     "Values": [
    //                         "F-HPUX"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "VehicleMake",
    //                     "ExportName": null,
    //                     "Values": [
    //                         "Enstrom"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "VehicleModel",
    //                     "ExportName": null,
    //                     "Values": [
    //                         "280"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "HighestInjuryLevel",
    //                     "ExportName": null,
    //                     "Values": []
    //                 },
    //                 {
    //                     "FieldName": "HasSafetyRec",
    //                     "ExportName": "HasSafetyRec",
    //                     "Values": [
    //                         "false"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "Mode",
    //                     "ExportName": "Mode",
    //                     "Values": [
    //                         "Aviation"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "ReportType",
    //                     "ExportName": "ReportType",
    //                     "Values": [
    //                         "None"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "DocketPublishDate",
    //                     "ExportName": null,
    //                     "Values": []
    //                 },
    //                 {
    //                     "FieldName": "OriginalPublishedDate",
    //                     "ExportName": null,
    //                     "Values": []
    //                 },
    //                 {
    //                     "FieldName": "ReportDate",
    //                     "ExportName": null,
    //                     "Values": [
    //                         "2023-12-08T00:23:50.322Z"
    //                     ]
    //                 },
    //                 {
    //                     "FieldName": "MostRecentReportType",
    //                     "ExportName": null,
    //                     "Values": []
    //                 },
    //                 {
    //                     "FieldName": "EV_ID",
    //                     "ExportName": null,
    //                     "Values": []
    //                 },
    //                 {
    //                     "FieldName": "RepGenFlag",
    //                     "ExportName": null,
    //                     "Values": []
    //                 }
    //             ],
    //             "EntryId": "6572c8ce196a54151895449a"
    //         }
    //     ],
    //     "Columns": [
    //         "NtsbNo",
    //         "CompletionStatus",
    //         "EventType",
    //         "Mkey",
    //         "IsStudy",
    //         "EventDate",
    //         "City",
    //         "State",
    //         "Country",
    //         "ReportNo",
    //         "N#",
    //         "VehicleMake",
    //         "VehicleModel",
    //         "HighestInjuryLevel",
    //         "HasSafetyRec",
    //         "Mode",
    //         "ReportType",
    //         "DocketPublishDate",
    //         "OriginalPublishedDate",
    //         "ReportDate",
    //         "MostRecentReportType",
    //         "EV_ID",
    //         "RepGenFlag"
    //     ],
    //     "ResultListCount": 5,
    //     "MaxResultCountReached": false
    // }
}

const fetchCurrentFormatedDay = async () => {
    return moment().format('L').toString();
}

// "2023-12-01"

const fetchPreviousFormatedDay = async (days) => {
    return moment().subtract(days, 'days').format('L').toString();
}

export {
    registrationParser,
    accidentsParser,
    fetchJsonData,
    fetchCurrentFormatedDay,
    fetchPreviousFormatedDay,
    fetchHtmlContent
}